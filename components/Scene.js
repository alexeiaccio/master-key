import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { MapControls, Plane, useAspect, Html } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import create from 'zustand'

import Item from './Item'
import Header from './Header'
import shuffleArray from '../lib/shuffleArray'

export const useStore = create((set, get) => ({
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  zoom: 50,
  soundOn: true,
  updatePositionX: (positionX) => set(() => ({ positionX })),
  updatePositionY: (positionY) => set(() => ({ positionY })),
  updateZoom: (zoom) => set(() => ({ zoom })),
  updateWidth: (width) => set(() => ({ width })),
  updateHeight: (height) => set(() => ({ height })),
  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),
}))

function Items({ items, positions, domContent }) {
  const [started, setStarted] = useState(false)
  const updatePositionX = useStore((state) => state.updatePositionX)
  const updatePositionY = useStore((state) => state.updatePositionY)
  const updateZoom = useStore((state) => state.updateZoom)
  const updateWidth = useStore((state) => state.updateWidth)
  const updateHeight = useStore((state) => state.updateHeight)
  useFrame(({ camera }) => {
    updatePositionX(camera.position.x.toFixed())
    updatePositionY(camera.position.y.toFixed())
    updateZoom(camera.zoom.toFixed())
    updateWidth(
      Math.abs(camera.left.toFixed()) + Math.abs(camera.right.toFixed())
    )
    updateHeight(
      Math.abs(camera.top.toFixed()) + Math.abs(camera.bottom.toFixed())
    )
  })

  return (
    <>
      {!started ? (
        <Html fullscreen portal={domContent}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
            onClick={() => void setStarted(true)}
          >
            Click to start
          </div>
        </Html>
      ) : (
        positions.map(({ position, index }) => (
          <Item
            key={`item-${index}`}
            position={position}
            index={index}
            item={items[index]}
          />
        ))
      )}
    </>
  )
}
function MainScene({ items, positions }) {
  const shuffledItems = shuffleArray(items)

  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 50], zoom: 50, up: [0, 0, 1], far: 1000 }}
    >
      <color attach="background" args={[0xfff389]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Items positions={positions} items={shuffledItems} />
        <MapControls enableDamping enableZoom={true} />
      </Suspense>
    </Canvas>
  )
}

function MiniMapItem({ position }) {
  const [x, y, w, h] = position
  const [scW, scH, csZ] = useAspect('contain', 1200, 1200, 1)

  return (
    <Plane
      scale={[w || scW, h || scH, csZ]}
      args={[0, 0, 1, 1]}
      position={[x, y, 1]}
    >
      <meshBasicMaterial attach="material" color={0x000000} />
    </Plane>
  )
}
function MiniMapItems({ positions }) {
  const positionX = useStore((state) => state.positionX)
  const positionY = useStore((state) => state.positionY)
  const zoom = useStore((state) => state.zoom)
  const height = useStore((state) => state.height)
  const width = useStore((state) => state.width)
  const minimapCamera = useRef()
  const { camera } = useThree()

  useMemo(() => {
    minimapCamera.current = {
      zoom: camera.zoom.toFixed(),
      width: Math.abs(camera.left.toFixed()) + Math.abs(camera.right.toFixed()),
      height:
        Math.abs(camera.top.toFixed()) + Math.abs(camera.bottom.toFixed()),
    }
  }, [camera])

  const rect = useMemo(() => {
    const factor = (minimapCamera.current.zoom / zoom) * 0.4
    return {
      x: positionX * factor,
      y: positionY * factor,
      width: width * factor,
      height: height * factor,
    }
  }, [minimapCamera.current, positionX, positionY, zoom, height, width])

  return (
    <group>
      {positions.map(({ position, index }) => (
        <MiniMapItem
          key={`mini-item-${index}`}
          position={position}
          index={index}
        />
      ))}
      <Plane
        position={[positionX, positionY, 0]}
        scale={[rect.width, rect.height, 0]}
      >
        <meshBasicMaterial attach="material" color={0xfff389} />
      </Plane>
    </group>
  )
}
function Minimap({ positions }) {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 50],
        rotateY: -Math.PI / 4,
        zoom: 2.5,
        far: 1000,
      }}
    >
      <color attach="background" args={[0x252209]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <MiniMapItems positions={positions} />
      </Suspense>
    </Canvas>
  )
}

export default function Scene(props) {
  const domContent = useRef()

  return (
    <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          cursor: 'grab',
        }}
      >
        <MainScene domContent={domContent} {...props} />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          bottom: '1rem',
          right: '1rem',
          border: `4px solid #bdb03b`,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <Minimap {...props} />
      </div>
      <div
        style={{ position: 'absolute', top: 0 }}
        ref={domContent}
      />
      <Header />
    </div>
  )
}

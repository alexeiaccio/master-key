import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { MapControls } from '@react-three/drei'

import Item from './Item'
import Header from './Header'
import shuffleArray from '../lib/shuffleArray'

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
        {positions.map(({ position, index }) => (
          <Item
            key={`item-${index}`}
            position={position}
            index={index}
            item={shuffledItems[index]}
          />
        ))}
        <MapControls enableDamping enableZoom={true} />
      </Suspense>
    </Canvas>
  )
}
function Minimap({ positions }) {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 50],
        zoom: 2,
        up: [0, 0, 1],
        // lookAt: () => [0, -1, 0],
        far: 1000,
        top: 1000,
        right: 1000,
        left: -1000,
        bottom: -1000,
      }}
    >
      <color attach="background" args={[0xffffff]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        {positions.map(({ position, index }) => (
          <Item key={`item-${index}`} position={position} index={index} />
        ))}
      </Suspense>
    </Canvas>
  )
}

export default function Scene(props) {
  return (
    <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <MainScene {...props} />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          bottom: '1rem',
          right: '1rem',
          border: `1px solid #000`,
        }}
      >
        <Minimap {...props} />
      </div>
      <Header />
    </div>
  )
}

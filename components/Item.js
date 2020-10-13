import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  useAspect,
  Plane,
  PositionalAudio,
  Text,
  PerspectiveCamera,
  OrbitControls,
  useCamera,
} from '@react-three/drei'
import { useFrame, useLoader, createPortal, useThree } from 'react-three-fiber'
import { TextureLoader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

import GifLoader from '../lib/gif-loader'
import { useTurnable } from '../hooks/useTurnable'

import Keyhole from './Keyhole'
import { useStore } from './Scene'

function Image({ item, scale, index, ...props }) {
  const setScales = useStore((state) => state.setScales)

  const FACTOR = 2500
  const [scW, scH, csZ] = scale
  const [map] = useLoader(TextureLoader, [item.src])
  const ratio = map.image.height / map.image.width
  const isVertical = ratio > 1
  const h = map && map.image ? ratio * scW : scH
  const w = map && map.image ? scH / ratio : scW
  const factor = (isVertical ? map.image.height : map.image.width) / FACTOR

  useMemo(() => {
    setScales(index, [
      (isVertical ? w : scW) * factor,
      (isVertical ? scH : h) * factor,
    ])
  }, [isVertical, w, scW, scH, h, factor])

  return (
    <Plane
      scale={[
        (isVertical ? w : scW) * factor,
        (isVertical ? scH : h) * factor,
        csZ,
      ]}
      args={[0, 0, 1, 1]}
      {...props}
    >
      <meshPhongMaterial attach="material" map={map} transparent />
    </Plane>
  )
}
function TextItem({ item, scale, index, ...props }) {
  const setScales = useStore((state) => state.setScales)
  const ref = useRef()
  const [text, setText] = useState('')

  useMemo(() => {
    fetch(item.src).then(async (x) => {
      const newText = await x.text()
      setText(newText)
    })
  }, [])

  useMemo(() => {
    setScales(index, [14, 11])
  }, [ref.current, text])

  return (
    <group {...props} dispose={null}>
      <Text
        ref={ref}
        color={'#000'}
        fontSize={0.3}
        maxWidth={10}
        lineHeight={1.2}
        letterSpacing={0.05}
        textAlign={'left'}
        font={`/fonts/${item.font}`}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  )
}
function Object({ item, ...props }) {
  const group = useRef()
  const ref = useTurnable(item.rotation)
  const { nodes, materials } = useLoader(
    GLTFLoader,
    `/glb/${item.src}`,
    draco()
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, -Math.PI / 2]}>
        <group ref={ref} scale={[item.scale, item.scale, item.scale]}>
          {item.nodes.map(({ name, material }) => (
            <group key={name}>
              <mesh
                name={name}
                material={materials[material]}
                geometry={nodes[name].geometry}
              />
            </group>
          ))}
        </group>
      </group>
      <pointLight position={[10, 10, 10]} intensity={0.75} />
    </group>
  )
}
function Video({ item, scale, index, ...props }) {
  const setScales = useStore((state) => state.setScales)
  const soundOn = useStore((state) => state.soundOn)

  const [scW, _scH, csZ] = scale
  const video = useMemo(() => {
    const vid = document.createElement('video')
    vid.src = item.src
    vid.loop = true
    vid.muted = true
    vid.playInline = true
    vid.crossOrigin = 'Anonymous'
    vid.play()
    vid.addEventListener(
      'play',
      function () {
        this.currentTime = 1
      },
      false
    )
    return vid
  }, [])

  useMemo(() => {
    setScales(index, [scW * (16 / 9), scW])
  }, [])

  return (
    <mesh scale={[scW * (16 / 9), scW, csZ]} {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material">
        <videoTexture
          attach="map"
          args={[video]}
          minFilter={THREE.LinearFilter}
          magFilter={THREE.LinearFilter}
          format={THREE.RGBFormat}
        />
      </meshBasicMaterial>
      {soundOn && <PositionalAudio url={item.sound} loop distance={5} />}
    </mesh>
  )
}
function Gif({ item, scale, index, ...props }) {
  const setScales = useStore((state) => state.setScales)

  const [scW, scH, csZ] = scale
  const [h, setH] = useState(scH)
  const [w, setW] = useState(scW)

  const loader = new GifLoader()

  const map = loader.load(
    item.src,
    function read(reader) {
      const ratio = reader.height / reader.width
      const isVertical = ratio > 1
      setW(isVertical ? scH / ratio : scW)
      setH(isVertical ? scH : ratio * scW)
      setScales(index, [
        isVertical ? scH / ratio : scW,
        isVertical ? scH : ratio * scW,
      ])
    },
    function pr(xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)
    },
    function cb() {
      console.error('An error happened.')
    }
  )

  return (
    <Plane scale={[w, h, csZ]} args={[0, 0, 1, 1]} {...props}>
      <meshBasicMaterial attach="material" map={map} transparent />
    </Plane>
  )
}

export default function Item({ position, index, item }) {
  const [x, y, w, h] = position
  const [scW, scH, csZ] = useAspect('contain', 1200, 1200, 1)

  if (item && item.type === 'image') {
    return (
      <Image
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'gif') {
    return (
      <Gif
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'video') {
    return (
      <Video
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'object') {
    if (item.name === 'keyhole') {
      return (
        <Keyhole
          scale={[item.scale, item.scale, item.scale]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[x, y, index]}
        />
      )
    }

    return (
      <Object
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'text') {
    return (
      <TextItem
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }

  return (
    <Plane
      scale={[w || scW, h || scH, csZ]}
      args={[0, 0, 1, 1]}
      position={[x, y, index]}
    >
      <meshPhongMaterial attach="material" wireframe />
    </Plane>
  )
}

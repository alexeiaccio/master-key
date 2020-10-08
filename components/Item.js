import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  useAspect,
  Plane,
  PositionalAudio,
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

function Image({ item, scale, ...props }) {
  const [scW, scH, csZ] = scale
  const [map] = useLoader(TextureLoader, [item.src])
  const ratio = map.image.height / map.image.width
  const isVertical = ratio > 1
  const h = map && map.image ? ratio * scW : scH
  const w = map && map.image ? scH / ratio : scW

  return (
    <Plane
      scale={[isVertical ? w : scW, isVertical ? scH : h, csZ]}
      args={[0, 0, 1, 1]}
      {...props}
    >
      <meshPhongMaterial attach="material" map={map} transparent />
    </Plane>
  )
}
function Object({ item, ...props }) {
  const group = useRef()
  const ref = useTurnable()
  const { nodes, materials } = useLoader(
    GLTFLoader,
    `/glb/${item.src}.gltf`,
    draco()
  )

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          ref={ref}
          rotation={[0.24, -0.55, 0.56]}
          scale={[0.5, 0.5, 0.5]}
        >
          <mesh
            material={materials.scene}
            geometry={nodes.planet001.geometry}
          />
          <mesh
            material={materials.scene}
            geometry={nodes.planet001.geometry}
          />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
        </group>
      </group>
    </group>
  )
}
function Video({ item, scale, ...props }) {
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

  return (
    <mesh scale={[scW, scW / 1.5, csZ]} {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
      <PositionalAudio url={item.src} loop distance={5} />
    </mesh>
  )
}
function Gif({ item, scale, ...props }) {
  const [scW, scH, csZ] = scale
  const [h, setH] = useState(scH)
  const [w, setW] = useState(scW)

  const loader = new GifLoader()

  const map = loader.load(
    item.src,
    function read(reader) {
      const ratio = reader.height / reader.width
      const isVertical = ratio > 1
      setH(isVertical ? scH : ratio * scW)
      setW(isVertical ? scH / ratio : scW)
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
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'gif') {
    return (
      <Gif
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'video') {
    return (
      <Video
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'object') {
    return (
      <Object
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

import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { MapControls } from '@react-three/drei'

import shuffleArray from '../lib/shuffleArray'
import MainSceneItems from './MainSceneItems'

export default function MainScene({ items, positions }) {
  const shuffledItems = shuffleArray(items)

  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 50], zoom: 50, up: [0, 0, 1], far: 1000 }}
    >
      <color attach="background" args={[0xfff389]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <MainSceneItems positions={positions} items={shuffledItems} />
        <MapControls enableDamping={false} enableZoom={true} />
      </Suspense>
    </Canvas>
  )
}

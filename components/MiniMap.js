import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import MiniMapItems from './MiniMapItems'

export default function Minimap({ items }) {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 50],
        rotateY: -Math.PI / 4,
        zoom: 1.8,
        far: 1000,
      }}
    >
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <MiniMapItems items={items} />
      </Suspense>
    </Canvas>
  )
}

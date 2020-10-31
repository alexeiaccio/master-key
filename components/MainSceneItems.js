import { Suspense, useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { Html, useProgress, Plane } from '@react-three/drei'
import dynamic from 'next/dynamic'

import { useStore } from '../hooks/useStore'

const Item = dynamic(() => import('./Item'), { ssr: false })

function Loader({ item }) {
  const progress = useProgress((state) => state.progress)
  const { position } = item
  const [x, y, w, h] = position
  return (
    <group>
      <Plane scale={[w, h, 1]} args={[0, 0, 1, 1]} position={[x, y, 1]}>
        <meshPhongMaterial attach="material" wireframe />
      </Plane>
      <Html center scaleFactor={0.02} scale={[w, h, 1]} position={[x, y, 1]}>
        <div className="text-center text-black whitespace-no-wrap">
          {progress.toFixed(2)}%
        </div>
      </Html>
    </group>
  )
}

export default function Items({ items }) {
  const updatePositionX = useStore((state) => state.updatePositionX)
  const updatePositionY = useStore((state) => state.updatePositionY)
  const updateWidth = useStore((state) => state.updateWidth)
  const updateHeight = useStore((state) => state.updateHeight)
  const { gl } = useThree()

  useEffect(() => void gl.setPixelRatio(window.devicePixelRatio || 2), [
    window && window.devicePixelRatio,
  ])

  useFrame(({ camera }) => {
    updatePositionX(~~camera.position.x)
    updatePositionY(~~camera.position.y)
    updateWidth(Math.abs(~~camera.left) + Math.abs(~~camera.right))
    updateHeight(Math.abs(~~camera.top) + Math.abs(~~camera.bottom))
  })

  return items.map((item) =>
    item ? (
      <Suspense fallback={<Loader key={`item-${item.index}`} item={item} />}>
        <Item key={`item-${item.index}`} item={item} />
      </Suspense>
    ) : null
  )
}

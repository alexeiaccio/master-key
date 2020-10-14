import { useState } from 'react'
import { Html } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

import { useStore } from '../hooks/useStore'
import Item from './Item'

export default function Items({ items, positions, domContent }) {
  const started = useStore((state) => state.started)
  const start = useStore((state) => state.start)
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
            className="absolute inset-0 bg-black bg-opacity-50 text-4xl text-white cursor-pointer flex items-center justify-center"
            onClick={start}
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

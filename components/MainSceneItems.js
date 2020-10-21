import { useFrame } from 'react-three-fiber'

import { useStore } from '../hooks/useStore'
import Item from './Item'

export default function Items({ items, positions }) {
  const updatePositionX = useStore((state) => state.updatePositionX)
  const updatePositionY = useStore((state) => state.updatePositionY)
  const updateWidth = useStore((state) => state.updateWidth)
  const updateHeight = useStore((state) => state.updateHeight)

  useFrame(({ camera }) => {
    updatePositionX(~~camera.position.x)
    updatePositionY(~~camera.position.y)
    updateWidth(Math.abs(~~camera.left) + Math.abs(~~camera.right))
    updateHeight(Math.abs(~~camera.top) + Math.abs(~~camera.bottom))
  })

  return positions.map(({ position, index }) => (
    <Item
      key={`item-${index}`}
      position={position}
      index={index}
      item={items[index]}
    />
  ))
}

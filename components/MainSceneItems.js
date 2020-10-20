import { useFrame } from 'react-three-fiber'

import { useStore } from '../hooks/useStore'
import Item from './Item'

export default function Items({ items, positions }) {
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

  return positions.map(({ position, index }) => (
    <Item
      key={`item-${index}`}
      position={position}
      index={index}
      item={items[index]}
    />
  ))
}

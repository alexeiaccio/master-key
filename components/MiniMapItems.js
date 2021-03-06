import { useMemo, useState, useEffect } from 'react'
import { Plane } from '@react-three/drei'
import { useThree } from 'react-three-fiber'

import { useStore } from '../hooks/useStore'
import MiniMapItem from './MiniMapItem'

export default function MiniMapItems({ items }) {
  const positionX = useStore((state) => state.positionX)
  const positionY = useStore((state) => state.positionY)
  const zoom = useStore((state) => state.zoom)
  const height = useStore((state) => state.height)
  const width = useStore((state) => state.width)
  const { camera } = useThree()
  const [minimapCamera, setMinimap] = useState({
    zoom: camera.zoom.toFixed(),
  })

  useEffect(() => {
    camera.zoom = (width / 1900) * 1.8
    setMinimap({
      zoom: camera.zoom.toFixed(),
    })
  }, [width])

  const rect = useMemo(() => {
    const factor = (minimapCamera.zoom / zoom) * 1200 / width
    return {
      x: positionX * factor,
      y: positionY * factor,
      width: width * factor,
      height: height * factor,
    }
  }, [minimapCamera, positionX, positionY, zoom, height, width])

  return (
    <group>
      {items.map((item) =>
        item ? (
          <MiniMapItem key={`minimap-item-${item.index}`} item={item} />
        ) : null
      )}
      <Plane
        position={[positionX, positionY, 0]}
        scale={[rect.width, rect.height, 0]}
      >
        <meshBasicMaterial attach="material" color={0xfff389} />
      </Plane>
    </group>
  )
}

import { useMemo } from 'react'
import { TextureLoader } from 'three'
import { Plane } from '@react-three/drei'
import { useLoader } from 'react-three-fiber'

import { useStore } from '../hooks/useStore'

export default function ImageItem({ item, scale, index, ...props }) {
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
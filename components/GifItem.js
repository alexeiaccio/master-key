import { useState } from 'react'
import { Plane } from '@react-three/drei'
import { LinearFilter, RGBFormat } from 'three'

import GifLoader from '../lib/gif-loader/gif-loader'
import { useStore } from '../hooks/useStore'

export default function GifItem({ item, scale, index, ...props }) {
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
    <Plane scale={[w * 1.5, h * 1.5, csZ]} args={[0, 0, 1, 1]} {...props}>
      <meshBasicMaterial
        minFilter={LinearFilter}
        magFilter={LinearFilter}
        format={RGBFormat}
        attach="material"
        map={map}
        transparent
      />
    </Plane>
  )
}

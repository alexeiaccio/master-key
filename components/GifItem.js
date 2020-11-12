import { useRef, useState, useMemo } from 'react'
import { Plane, Html } from '@react-three/drei'
import { LinearFilter, RGBFormat } from 'three'

import GifLoader from '../lib/gif-loader/gif-loader'
import { useStore } from '../hooks/useStore'
import { GITHUB } from '../lib/GITHUB'

export default function GifItem({ item, scale, index, ...props }) {
  const setScales = useStore((state) => state.setScales)

  const [scW, scH, csZ] = scale
  const [h, setH] = useState(scH)
  const [w, setW] = useState(scW)
  const loaded = useRef(0)

  const loader = new GifLoader()

  const map = useMemo(() => loader.load(
    `${GITHUB}${item.src}?raw=true`,
    function read(reader) {
      const ratio = reader.height / reader.width
      const isVertical = ratio > 1
      setW(isVertical ? scH / ratio : scW)
      setH(isVertical ? scH : ratio * scW)
      setScales(index, [
        (isVertical ? scH / ratio : scW) * item.scale || 1,
        (isVertical ? scH : ratio * scW) * item.scale || 1,
      ])
    },
    function pr(xhr) {
      loaded.current = (xhr.loaded / xhr.total) * 100
    },
    function cb() {
      console.error('An error happened.')
    }
  ), [item])

  return loaded.current < 100 ? (
    <Html center scaleFactor={0.02} scale={[w, h, 1]} {...props}>
      <div className="text-center text-black whitespace-no-wrap">
        {loaded.current.toFixed(2)}%
      </div>
    </Html>
  ) : (
    <Plane scale={[w * item.scale, h * item.scale, csZ]} args={[0, 0, 1, 1]} {...props}>
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

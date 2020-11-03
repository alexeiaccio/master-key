import { useMemo } from 'react'
import { LinearFilter, RGBFormat } from 'three'

import { useStore } from '../hooks/useStore'
import { GITHUB } from '../lib/GITHUB'

export default function VideoItem({ item, scale, index, ...props }) {
  const setScales = useStore((state) => state.setScales)

  const [scW, _scH, csZ] = scale
  const video = useMemo(() => {
    const vid = document.createElement('video')
    vid.src = `${GITHUB}${item.src}?raw=true`
    vid.loop = true
    vid.muted = true
    vid.playInline = true
    vid.crossOrigin = 'Anonymous'
    vid.play()
    vid.addEventListener(
      'play',
      function () {
        this.currentTime = 1
      },
      false
    )
    return vid
  }, [])

  useMemo(() => {
    setScales(index, [scW * (16 / 9), scW])
  }, [])

  return (
    <mesh scale={[scW * (16 / 9), scW, csZ]} {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material">
        <videoTexture
          attach="map"
          args={[video]}
          minFilter={LinearFilter}
          magFilter={LinearFilter}
          format={RGBFormat}
        />
      </meshBasicMaterial>
    </mesh>
  )
}

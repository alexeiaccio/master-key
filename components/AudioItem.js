import { PositionalAudio } from '@react-three/drei'

import { useStore } from '../hooks/useStore'
import { GITHUB } from '../lib/GITHUB'

export default function AudioItem({ item, scale, index, ...props }) {
  const soundOn = useStore((state) => state.soundOn)
  const url = `${GITHUB}${item.sound}?raw=true`

  return (
    <group {...props}>
      {soundOn && (
        <PositionalAudio url={url} loop distance={item.distance} />
      )}
    </group>
  )
}

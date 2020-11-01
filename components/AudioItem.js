import { PositionalAudio } from '@react-three/drei'

import { useStore } from '../hooks/useStore'

export default function AudioItem({ item, scale, index, ...props }) {
  const soundOn = useStore((state) => state.soundOn)

  return (
    <group {...props}>
      {soundOn && (
        <PositionalAudio url={item.sound} loop distance={item.distance} />
      )}
    </group>
  )
}

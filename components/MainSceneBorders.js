import { Vector3 } from 'three'
import { Line } from '@react-three/drei'

import { useStore } from '../hooks/useStore'

export default function MainSceneBorders() {
  const bounds = useStore((state) => state.bounds)

  console.log(bounds)
  const points = bounds
    ? [
        [bounds[0], bounds[1], 0],
        [bounds[2], bounds[1], 0],
        [bounds[2], bounds[3], 0],
        [bounds[0], bounds[3], 0],
        [bounds[0], bounds[1], 0],
      ]
    : []

  return bounds ? (
    <Line points={points} color={0x4a5568} lineWidth={8} dashed={false} />
  ) : null
}

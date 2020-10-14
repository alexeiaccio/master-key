import { Plane } from '@react-three/drei'

import { useStore } from '../hooks/useStore'

export default function MiniMapItem({ position, index }) {
  const started = useStore((state) => state.started)
  const scale = useStore((state) => state.scales[index])
  const [x, y, w, h] = position

  return started ? (
    <Plane
      scale={[scale ? scale[0] : w, scale ? scale[1] : h, 1]}
      args={[0, 0, 1, 1]}
      position={[x, y, 1]}
    >
      <meshBasicMaterial attach="material" color={0x000000} />
    </Plane>
  ) : null
}

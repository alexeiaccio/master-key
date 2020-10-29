import { Plane } from '@react-three/drei'

import { useStore } from '../hooks/useStore'

export default function MainSceneBorders() {
  const bounds = useStore((state) => state.bounds)

  return bounds ? (
    <>
      <Plane
        position={[bounds[0] - 15, 0, 10]}
        scale={[30, 200, 1]}
        args={[0, 0, 1, 1]}
      >
        <meshBasicMaterial attach="material" color={0xcbd5e0} />
      </Plane>
      <Plane
        position={[bounds[2] + 15, 0, 10]}
        scale={[30, 200, 1]}
        args={[0, 0, 1, 1]}
      >
        <meshBasicMaterial attach="material" color={0xcbd5e0} />
      </Plane>
      <Plane
        position={[0, bounds[1] + 18, 10]}
        scale={[200, 30, 1]}
        args={[0, 0, 1, 1]}
      >
        <meshBasicMaterial attach="material" color={0xcbd5e0} />
      </Plane>
      <Plane
        position={[0, bounds[3] - 11.4, 10]}
        scale={[200, 30, 1]}
        args={[0, 0, 1, 1]}
      >
        <meshBasicMaterial attach="material" color={0xcbd5e0} />
      </Plane>
    </>
  ) : null
}

import { useGLTF } from '@react-three/drei/useGLTF'

import { useTurnable } from '../hooks/useTurnable'

const ROTATION = {
  0: [Math.PI / 2, 0, 0],
  x: [Math.PI / 2, 0, 0],
  '-x': [-Math.PI / 2, 0, 0],
  y: [0, Math.PI / 2, 0],
  '-y': [0, -Math.PI / 2, 0],
  z: [0, 0, Math.PI / 2],
  '-z': [0, 0, -Math.PI / 2],
}

export default function GLTFItem({ item, index, position }) {
  const ref = useTurnable(item.axis, item.rotationLimits)
  const { scene } = useGLTF(`/glb/${item.src}`, true)

  return (
    <group scale={[item.scale, item.scale, item.scale]} position={position}>
      <group rotation={ROTATION[item.rotation]}>
        <group ref={ref}>
          <primitive object={scene} dispose={null} castShadow receiveShadow />
        </group>
        <directionalLight
          position={[position[0] + 2, position[1] + 2, 500]}
          intensity={0.5}
        />
      </group>
      <fog attach="fog" args={['white', 10, 60]} />
    </group>
  )
}

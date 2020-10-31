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

export default function GLTFItem({ item, ...props }) {
  const ref = useTurnable(item.axis, item.rotationLimits)
  const { scene } = useGLTF(`/glb/${item.src}`, true)

  return (
    <group scale={[item.scale, item.scale, item.scale]} {...props}>
      <group rotation={ROTATION[item.rotation]}>
        <group ref={ref}>
          <primitive object={scene} dispose={null} />
        </group>
        <directionalLight
          position={[0.5, 1, 5]}
          intensity={0.1}
          color={0xbee3f8}
          castShadow
        />
      </group>
    </group>
  )
}

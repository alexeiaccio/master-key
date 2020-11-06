import { useGLTF } from '@react-three/drei/useGLTF'
import { Environment } from '@react-three/drei'

import { useTurnable } from '../hooks/useTurnable'
import { GITHUB } from '../lib/GITHUB'

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
  const { scene } = useGLTF(`${GITHUB}/glb/${item.src}`, true)

  return (
    <group scale={[item.scale, item.scale, item.scale]} position={position}>
      <group rotation={ROTATION[item.rotation]}>
        <group ref={ref}>
          <primitive object={scene} dispose={null} />
        </group>
      </group>
      <fog color={0xffffff} />
      <Environment files={'venice_sunset_1k.hdr'} />
      <directionalLight position={[10, 10, 10]} intensity={0.1} />
      <hemisphereLight
        position={[0, 20, 0]}
        intensity={0.3}
        color={0x00aaff}
        groundColor={0xffaa00}
      />
    </group>
  )
}

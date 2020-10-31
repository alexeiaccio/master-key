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
      </group>
      <ambientLight intensity={0.2} />
      <spotLight
        intensity={0.5}
        position={[position[0], position[1], 50]}
        shadow-bias={-0.00005}
        penumbra={1}
        angle={Math.PI / 6}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
    </group>
  )
}

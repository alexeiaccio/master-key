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
    <group>
      <group scale={[item.scale, item.scale, item.scale]} position={position}>
        <group rotation={ROTATION[item.rotation]}>
          <group ref={ref}>
            <primitive object={scene} dispose={null} castShadow receiveShadow />
          </group>
        </group>
      </group>
      <fog attach="fog" args={['white', 0, 40]} />
      {/* <ambientLight intensity={0.05} /> */}
      <pointLight
        intensity={0.1}
        color={0x2b6cb0}
        position={[position[0] - 40, position[1] - 2, 5]}
      />
      <directionalLight
        castShadow
        position={[position[0] + 2, position[1] + 2, 500]}
        intensity={0.1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-1000}
        shadow-camera-right={1000}
        shadow-camera-top={1000}
        shadow-camera-bottom={-1000}
      />
    </group>
  )
}

import { useGLTF } from '@react-three/drei/useGLTF'

import { useTurnable } from '../hooks/useTurnable'

const ROTATION = {
  x: [Math.PI / 2, 0, 0],
  '-x': [-Math.PI / 2, 0, 0],
  y: [0, Math.PI / 2, 0],
  '-y': [0, -Math.PI / 2, 0],
  z: [0, 0, Math.PI / 2],
  '-z': [0, 0, -Math.PI / 2],
}

export default function GLTFItem({ item, ...props }) {
  const ref = useTurnable(item.axis || 'z')
  const { scene } = useGLTF(`/glb/${item.src}`, true)

  useGLTF.preload(`/glb/${item.src}`)

  return (
    <group scale={[item.scale, item.scale, item.scale]} {...props}>
      <group rotation={ROTATION[item.rotation]}>
        <group ref={ref}>
          <primitive object={scene} dispose={null} />
        </group>
        <pointLight position={[10, 10, 10]} intensity={0.75} />
      </group>
    </group>
  )
}

import React from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useTurnable } from '../hooks/useTurnable'

export default function Model(props) {
  const ref = useTurnable('z')
  const { scene } = useGLTF('/glb/keyhole.glb', true)

  return (
    <group {...props}>
      <group ref={ref}>
        <primitive object={scene} dispose={null} />
      </group>
      <pointLight position={[10, 10, 10]} intensity={0.75} />
    </group>
  )
}

useGLTF.preload('/keyhole.glb')

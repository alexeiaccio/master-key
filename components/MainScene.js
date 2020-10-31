import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { MapControls } from '@react-three/drei'

import MainSceneItems from './MainSceneItems'
import MainSceneManager from './MainSceneManager'
import MainSceneBorders from './MainSceneBorders'

export default function MainScene({ items }) {
  return (
    <>
      <Canvas
        orthographic
        colorManagement={false}
        camera={{
          position: [0, 0, 50],
          lookAt: () => [0, 0, 0],
          zoom: 50,
          up: [0, 0, 1],
          autoRotate: false,
        }}
      >
        <color attach="background" args={[0xfff389]} />
        <ambientLight intensity={0.95} />
        <Suspense>
          <MainSceneBorders />
          <MainSceneItems items={items} />
          <MainSceneManager items={items} />
          <MapControls
            enableDamping={false}
            enableZoom={true}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </>
  )
}

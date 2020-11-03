import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { MapControls, Environment } from '@react-three/drei'
// import { StandardEffects } from 'drei'

import MainSceneItems from './MainSceneItems'
import MainSceneManager from './MainSceneManager'
import MainSceneBorders from './MainSceneBorders'
import { GITHUB } from '../lib/GITHUB'

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
        pixelRatio={2}
      >
        <color attach="background" args={[0xfff389]} />
        <ambientLight intensity={0.4} />
        <Suspense fallback={null}>
          <MainSceneBorders />
          <MainSceneItems items={items} />
          <MainSceneManager items={items} />
          <Environment
            background={false}
            files={[
              '030.png',
              '030.png',
              '030.png',
              '030.png',
              '030.png',
              '030.png',
            ]}
            path={`${GITHUB}/textures/`}
          />
          <MapControls
            enableDamping={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </>
  )
}

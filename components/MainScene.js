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
        pixelRatio={2}
      >
        <Suspense fallback={null}>
          <MainSceneBorders />
          <MainSceneItems items={items} />
          <MainSceneManager items={items} />
          <MapControls
            enableDamping={false}
            enableZoom={false}
            enableRotate={false}
          />
          <fog color={0xffffff} />
          <pointLight
            position={[100, 50, 100]}
            intensity={0.75}
          />
          <pointLight
            position={[-100, -50, 100]}
            intensity={1}
          />
          <hemisphereLight
            position={[0, 80, 1]}
            intensity={0.6}
            color={0x77eeff}
            groundColor={0xffaa00}
          />
        </Suspense>
      </Canvas>
    </>
  )
}

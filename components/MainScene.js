import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Loader, MapControls } from '@react-three/drei'

import MainSceneItems from './MainSceneItems'
import MainSceneMenager from './MainSceneManager'

export default function MainScene({ items }) {
  return (
    <>
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 50],
          lookAt: () => [0, 0, 0],
          zoom: 50,
          up: [0, 0, 1],
          autoRotate: false,
        }}
      >
        <color attach="background" args={[0xfff389]} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <MainSceneItems items={items} />
          <MainSceneMenager items={items} />
          <MapControls enableDamping={false} enableZoom={false} enableRotate={false}/>
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ opacity: 0.75 }}
        dataInterpolation={(p) => `Loading ${(p * 100).toFixed(2)}%`}
      />
    </>
  )
}

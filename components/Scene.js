import { useRef } from 'react'
import { Loader } from '@react-three/drei'

import { useStore } from '../hooks/useStore'
import Header from './Header'
import HeatMap from './HeatMap'
import MainScene from './MainScene'
import Minimap from './MiniMap'
import Footer from './Footer'

export default function Scene(props) {
  const started = useStore((state) => state.started)
  const start = useStore((state) => state.start)
  const domContent = useRef()

  return (
    <div className="fixed w-screen h-screen">
      {!started ? (
        <div
          className="absolute inset-0 text-4xl text-gray-700 cursor-pointer flex items-center justify-center"
          onClick={start}
        >
          Click to start
        </div>
      ) : (
        <>
          <div className="absolute w-full h-full cursor-grab">
            <MainScene domContent={domContent} {...props} />
          </div>
          <div className="hidden md:block absolute w-screen-20 h-screen-20 bottom-0 right-0 m-4 rounded-sm border-2 border-solid border-gray-700">
            <div className="absolute inset-0">
              <HeatMap />
            </div>
            <Minimap {...props} />
          </div>
          <div className="absolute top-0" ref={domContent} />
        </>
      )}
      <Loader
        containerStyles={{ opacity: 0.75 }}
        dataInterpolation={(p) => `Loading ${(p * 100).toFixed(2)}%`}
      />
      <Header />
      <Footer />
    </div>
  )
}

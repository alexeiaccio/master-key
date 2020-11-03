import { useEffect } from 'react'
// import { useProgress } from '@react-three/drei'

import { GITHUB } from '../lib/GITHUB'
import { useStore } from '../hooks/useStore'
import Header from './Header'
import HeatMap from './HeatMap'
import Minimap from './MiniMap'
import Footer from './Footer'
import MainScene from './MainScene'

function launchFullScreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen()
  }
}

export default function Scene(props) {
  // const progress = useProgress((state) => state.progress)
  const started = useStore((state) => state.started)
  const start = useStore((state) => state.start)
  const zoom = useStore((state) => state.zoom)
  const noop = useStore((state) => state.noop)
  const zoomIn = useStore((state) => state.zoomIn)

  function handleStart() {
    start()

    if (typeof document !== undefined) {
      if (!document.fullscreenElement) {
        launchFullScreen(document.documentElement)
      }
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        console.log('resize')
        zoomIn()
      })
    }
  }, [])

  return (
    <div className="fixed w-screen h-screen">
      {!started ? (
        <div
          className="absolute inset-0 flex-col items-center justify-center hidden space-y-8 text-black cursor-pointer md:flex bg-theme"
          onClick={handleStart}
          style={{ zIndex: 99999999999999 }}
        >
          <img src="/666.png" width="67" height="85" />
          <div className="text-center">
            <div>CLICK ANYWHERE</div>
            <div>TO ENTER FULLSCREEN</div>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute hidden w-full h-full md:block cursor-grab">
            <MainScene {...props} />
            {zoom !== 50 ? <div className="absolute inset-0" /> : null}
          </div>
          <div
            className="fixed bottom-0 right-0 flex-row items-end justify-end hidden m-4 md:flex w-screen-20 h-screen-20"
            style={{ zIndex: 99999999999 }}
          >
            <div className="relative border-2 border-gray-700 border-solid rounded-sm">
              <div className="absolute inset-0">
                <HeatMap />
              </div>
              <Minimap {...props} />
            </div>
          </div>
          <div className="hidden md:block">
            <Footer />
            <Header />
          </div>
        </>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 text-xl text-black bg-theme md:hidden">
        <div className="w-24">
          <img
            src={`${GITHUB}/textures/002.png`}
            width="297"
            height="518"
            className="w-full"
            alt="Master Key"
          />
        </div>
        <div className="px-8">
          <img
            src={`${GITHUB}/textures/logoeng.png`}
            width="792"
            height="212"
            className="w-full"
            alt="Master Key"
          />
        </div>
        <div className="px-8 text-center">
          This page is optimised for desktop.
          <br />
          You are welcome to wander in from any desktop device.
        </div>
      </div>
    </div>
  )
}

import { useStore } from '../hooks/useStore'
import Header from './Header'
import HeatMap from './HeatMap'
import Minimap from './MiniMap'
import Footer from './Footer'
import Info from './Info'
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
  const started = useStore((state) => state.started)
  const start = useStore((state) => state.start)
  const zoom = useStore((state) => state.zoom)
  const zoomIn = useStore((state) => state.zoomIn)
  const lang = useStore((state) => state.lang)

  function handleStart() {
    start()

    if (typeof document !== undefined && typeof window !== undefined) {
      if (!document.fullscreenElement) {
        launchFullScreen(document.documentElement)
      }
      window.addEventListener('resize', () => {
        console.log('resize')
        zoomIn()
      })
    }
  }

  return (
    <div className="fixed w-screen h-screen">
      {!started ? (
        <>
          <div
            className="absolute inset-0 flex-col items-center justify-center hidden text-xl text-gray-700 cursor-pointer md:flex"
            onClick={handleStart}
          >
            <div>{lang === 'eng' ? 'click to start' : 'клик чтобы начать'}</div>
            <div>{lang === 'eng' ? '(fullscreen)' : '(полный экран)'}</div>
          </div>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-xl text-gray-700 md:hidden"
          >
            <div>{lang === 'eng' ? 'open on desktop' : 'смотрите на большом экране'}</div>
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute hidden w-full h-full md:block cursor-grab"
          >
            <MainScene {...props} />
            {zoom !== 50 ? <div className="absolute inset-0" /> : null}
          </div>
          <div className="fixed bottom-0 right-0 flex-row items-end justify-end hidden m-4 md:flex w-screen-20 h-screen-20">
            <Info />
            <div className="relative border-2 border-gray-700 border-solid rounded-sm">
              <div className="absolute inset-0">
                <HeatMap />
              </div>
              <Minimap {...props} />
            </div>
          </div>
          <Footer />
        </>
      )}
      <Header />
    </div>
  )
}

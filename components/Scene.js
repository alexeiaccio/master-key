import { useStore } from '../hooks/useStore'
import Header from './Header'
import HeatMap from './HeatMap'
import Minimap from './MiniMap'
import Footer from './Footer'
import Info from './Info'
import MainScene from './MainScene'

export default function Scene(props) {
  const started = useStore((state) => state.started)
  const start = useStore((state) => state.start)
  const zoom = useStore((state) => state.zoom)

  return (
    <div className="fixed w-screen h-screen">
      {!started ? (
        <div
          className="absolute inset-0 flex items-center justify-center text-4xl text-gray-700 cursor-pointer"
          onClick={start}
        >
          Click to start
        </div>
      ) : (
        <>
          <div
            className={`absolute w-full h-full ${zoom === 50 && 'cursor-grab'}`}
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

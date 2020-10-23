import { useStore } from '../hooks/useStore'

export default function Footer() {
  const zoomOut = useStore((state) => state.zoomOut)
  const zoomIn = useStore((state) => state.zoomIn)
  const moveToHome = useStore((state) => state.moveToHome)
  const zoom = useStore((state) => state.zoom)
  const swing = useStore((state) => state.swing)
  const noop = useStore((state) => state.noop)

  return (
    <footer className="fixed bottom-0 left-0 flex flex-col items-center justify-center p-4 font-mono text-sm overflow-visible">
      <div
        className={`${
          zoom === 50 && 'cursor-pointer text-gray-700'
        } font-sans text-gray-500`}
        onClick={zoom === 50 ? swing : noop}
      >
        swing
      </div>
      <div
        className={`${
          zoom === 50 && 'cursor-pointer text-gray-700'
        } font-sans text-gray-500`}
        onClick={zoom === 50 ? moveToHome : noop}
      >
        back to start
      </div>
      <div>
        <span
          className={`${
            zoom === 5 && 'cursor-pointer text-gray-700'
          } font-sans text-gray-500`}
          onClick={zoom === 5 ? zoomIn : noop}
        >
          zoom in
        </span>
        {' / '}
        <span
          className={`${
            zoom === 50 && 'cursor-pointer text-gray-700'
          } font-sans text-gray-500`}
          onClick={zoom === 50 ? zoomOut : noop}
        >
          zoom out
        </span>
      </div>
    </footer>
  )
}

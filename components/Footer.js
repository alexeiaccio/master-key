import { useStore } from '../hooks/useStore'

export default function Footer() {
  const zoomOut = useStore((state) => state.zoomOut)
  const zoomIn = useStore((state) => state.zoomIn)
  const moveToHome = useStore((state) => state.moveToHome)
  const zoom = useStore((state) => state.zoom)
  const swing = useStore((state) => state.swing)
  const noop = useStore((state) => state.noop)

  return (
    <footer className="fixed bottom-0 left-0 flex flex-col items-center justify-center p-4 overflow-visible font-mono text-sm text-gray-700">
      <div
        className={`${zoom === 50 && 'cursor-pointer opacity-100'} font-sans opacity-0`}
        onClick={zoom === 50 ? swing : noop}
      >
        swing
      </div>
      <div
        className={`${
          zoom === 50 && 'cursor-pointer opacity-100'
        } font-sans opacity-0`}
        onClick={zoom === 50 ? moveToHome : noop}
      >
        back to start
      </div>
      <div>
        {zoom === 50 ? (
          <span
            className="font-sans cursor-pointer"
            onClick={zoomOut}
          >
            zoom out
          </span>
        ) : (
          <span
            className="font-sans cursor-pointer"
            onClick={zoomIn}
          >
            zoom in
          </span>
        )}
      </div>
    </footer>
  )
}

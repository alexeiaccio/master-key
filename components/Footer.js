import { useStore } from '../hooks/useStore'

export default function Footer() {
  const zoomOut = useStore((state) => state.zoomOut)
  const zoomIn = useStore((state) => state.zoomIn)
  const moveToHome = useStore((state) => state.moveToHome)
  const zoom = useStore((state) => state.zoom)
  const swing = useStore((state) => state.swing)
  const noop = useStore((state) => state.noop)

  return (
    <footer
      className="fixed bottom-0 left-0 flex flex-col items-center justify-center p-4 space-y-2 overflow-visible font-mono text-sm text-black"
      style={{ zIndex: 99999999999 }}
    >
      <div
        className={`${zoom === 50 && 'cursor-pointer opacity-100'} opacity-0`}
        onClick={zoom === 50 ? moveToHome : noop}
      >
        swing back
      </div>
      <div
        className={`${zoom === 50 && 'cursor-pointer opacity-100'} opacity-0`}
        onClick={zoom === 50 ? swing : noop}
      >
        spring forth
      </div>
      <div>
        {zoom === 50 ? (
          <span className="cursor-pointer" onClick={zoomOut}>
            zoom out
          </span>
        ) : (
          <span className="cursor-pointer" onClick={zoomIn}>
            zoom in
          </span>
        )}
      </div>
    </footer>
  )
}

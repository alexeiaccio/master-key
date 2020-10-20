// import { useStore } from '../hooks/useStore'

export default function Footer() {
  return (
    <header className="absolute bottom-0 left-0 flex flex-col items-center justify-center p-4 font-mono text-sm">
      <div
        className="cursor-pointer font-sans text-gray-700"
        // onClick={toggleSound}
      >
        swing
      </div>
      <div
        className="cursor-pointer font-sans text-gray-700"
        // onClick={toggleSound}
      >
        back to start
      </div>
      <div
        className="cursor-pointer font-sans text-gray-700"
        // onClick={toggleSound}
      >
        zoom in / zoom out
      </div>
    </header>
  )
}

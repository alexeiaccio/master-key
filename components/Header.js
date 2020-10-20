import { useStore } from '../hooks/useStore'
import MasterKey from './MasterKey'

const noop = () => {}

export default function Header() {
  const soundOn = useStore((state) => state.soundOn)
  const lang = useStore((state) => state.lang)
  const toggleSound = useStore((state) => state.toggleSound)
  const toggleLang = useStore((state) => state.toggleLang)

  return (
    <header className="absolute inset-0 bottom-auto flex flex-row items-baseline justify-between p-4 font-mono text-sm">
      <h1 className="h-6 text-black">
        <MasterKey />
      </h1>
      <div
        className="ml-auto cursor-pointer font-sans text-gray-700"
        style={{
          textDecoration: !soundOn ? 'line-through' : 'none',
        }}
        onClick={toggleSound}
      >
        {soundOn ? 'sound: on' : 'sound: off'}
      </div>
      <div
        className={`ml-4 font-sans text-gray-700 flex items-center justify-center w-10 h-10 border-2 border-solid rounded-full ${
          lang === 'eng'
            ? 'border-gray-700'
            : 'cursor-pointer border-transparent'
        }`}
        onClick={lang === 'rus' ? toggleLang : noop}
      >
        eng
      </div>
      <div
        className={`font-sans text-gray-700 flex items-center justify-center w-10 h-10 border-2 border-solid rounded-full ${
          lang === 'rus'
            ? 'border-gray-700'
            : 'cursor-pointer border-transparent'
        }`}
        onClick={lang === 'eng' ? toggleLang : noop}
      >
        rus
      </div>
    </header>
  )
}

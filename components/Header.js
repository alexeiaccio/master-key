import { useStore } from '../hooks/useStore'
import MasterKey from './MasterKey'

export default function Header() {
  const soundOn = useStore((state) => state.soundOn)
  const lang = useStore((state) => state.lang)
  const toggleSound = useStore((state) => state.toggleSound)
  const toggleLang = useStore((state) => state.toggleLang)
  const noop = useStore((state) => state.noop)

  return (
    <header
      className="absolute inset-0 bottom-auto flex flex-row items-center justify-between p-4 font-mono text-sm"
      style={{ zIndex: 15940005 }}
    >
      <h1 className="w-32 h-8 text-black">
        <MasterKey />
      </h1>
      <div
        className="ml-auto font-sans text-gray-700 cursor-pointer"
        style={{
          textDecoration: !soundOn ? 'line-through' : 'none',
        }}
        onClick={toggleSound}
      >
        {soundOn
          ? lang === 'eng'
            ? 'sound: on'
            : 'звук: вкл'
          : lang === 'eng'
          ? 'sound: off'
          : 'звук: выкл'}
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

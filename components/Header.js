import { useStore } from '../hooks/useStore'
import Info from './Info'

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
      <div className="relative ml-auto">
        <Info />
      </div>
      <div
        className="ml-4 text-black cursor-pointer"
        style={{
          textDecoration: !soundOn ? 'line-through' : 'none',
        }}
        onClick={toggleSound}
      >
        {soundOn ? 'sound: on' : 'sound: off'}
      </div>
      <div
        className={`ml-4  text-black flex items-center justify-center w-10 h-10 border-2 border-solid rounded-full ${
          lang === 'eng' ? 'border-black' : 'cursor-pointer border-transparent'
        }`}
        onClick={lang === 'rus' ? toggleLang : noop}
      >
        eng
      </div>
      <div
        className={` text-black flex items-center justify-center w-10 h-10 border-2 border-solid rounded-full ${
          lang === 'rus' ? 'border-black' : 'cursor-pointer border-transparent'
        }`}
        onClick={lang === 'eng' ? toggleLang : noop}
      >
        rus
      </div>
    </header>
  )
}

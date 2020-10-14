import { useStore } from '../hooks/useStore'
import Text from './Text'

export default function Header() {
  const started = useStore((state) => state.started)
  const soundOn = useStore((state) => state.soundOn)
  const toggleSound = useStore((state) => state.toggleSound)

  return (
    <header className="absolute inset-0 bottom-auto flex flex-col items-center justify-center py-2">
      <h1 className="font-sans text-2xl">MASTER KEY</h1>
      {started ? (
        <div
          className="pb-2 cursor-pointer font-sans"
          style={{
            textDecoration: !soundOn ? 'line-through' : 'none',
          }}
          onClick={toggleSound}
        >
          {soundOn ? 'sound on' : 'sound off'}
        </div>
      ) : null}
      <div>
        <details>
          <summary className="outline-none focus:outline-none text-center p-2 cursor-pointer font-sans">
            {''}
          </summary>
          <Text />
        </details>
      </div>
      <style jsx>
        {`
          summary::after {
            font-weight: 500;
            content: 'about';
          }

          details[open] summary::after {
            font-weight: 600;
            content: 'close';
          }
        `}
      </style>
    </header>
  )
}

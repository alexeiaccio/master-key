import { useStore } from './Scene'
import Text from './Text'

export default function Header() {
  const soundOn = useStore((state) => state.soundOn)
  const toggleSound = useStore((state) => state.toggleSound)

  return (
    <header>
      <h1>MASTER KEY</h1>
      <div
        className="sound"
        style={{
          textDecoration: !soundOn ? 'line-through' : 'none',
        }}
        onClick={() => void toggleSound()}
      >
        {soundOn ? 'sound on' : 'sound off'}
      </div>
      <div>
        <details>
          <summary>{''}</summary>
          <Text />
        </details>
      </div>
      <style jsx>
        {`
          header {
            position: absolute;
            right: 0;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
          }
          .sound {
            padding-bottom: 0.5rem;
            cursor: pointer;
            font-family: sans-serif;
          }
          h1 {
            color: black;
            font-family: sans-serif;
            font-size: 1.5rem;
          }
          summary {
            outline: none !important;
            text-align: center;
            padding: 0.5rem;
            cursor: pointer;
            font-family: sans-serif;
          }

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

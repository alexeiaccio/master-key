import Text from './Text'

export default function Header() {
  return (
    <header>
      <h1>MASTER KEY</h1>
      <div>
        <details>
          <summary>about</summary>
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
          h1 {
            color: black;
            font-family: sans-serif;
            font-size: 1.5rem;
          }
        `}
      </style>
    </header>
  )
}

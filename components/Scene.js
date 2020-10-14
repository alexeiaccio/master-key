import { useRef } from 'react'

import Header from './Header'
import MainScene from './MainScene'
import Minimap from './MiniMap'

export default function Scene(props) {
  const domContent = useRef()

  return (
    <div className="fixed w-screen h-screen">
      <div className="absolute w-full h-full cursor-grab">
        <MainScene domContent={domContent} {...props} />
      </div>
      <div className="hidden md:block absolute w-64 h-64 bottom-0 right-0 m-4 rounded-sm border-4 border-solid border-theme-700">
        <Minimap {...props} />
      </div>
      <div className="absolute top-0" ref={domContent} />
      <Header />
    </div>
  )
}

import { Text } from "@react-three/drei"
import { useMemo, useRef, useState } from "react"

import { useStore } from "../hooks/useStore"

export default function TextItem({ item, scale, index, ...props }) {
  const lang = useStore((state) => state.lang)
  const setScales = useStore((state) => state.setScales)
  const ref = useRef()
  const [text, setText] = useState('')

  useMemo(() => {
    fetch(item[lang]).then(async (x) => {
      const newText = await x.text()
      setText(newText)
    })
  }, [lang])

  useMemo(() => {
    setScales(index, [17, 8])
  }, [ref.current, text])

  return (
    <group {...props} dispose={null}>
      <Text
        ref={ref}
        color={'#000'}
        fontSize={0.3}
        maxWidth={14}
        lineHeight={1.2}
        letterSpacing={0.05}
        textAlign={'left'}
        font={`/fonts/${item.font}`}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  )
}
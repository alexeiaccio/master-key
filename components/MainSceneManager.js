import { useEffect, useMemo } from 'react'
import { useThree } from 'react-three-fiber'
import { ArcCurve } from 'three'

import { useStore } from '../hooks/useStore'

export default function MainSceneManager({ items }) {
  const { camera } = useThree()
  const zoom = useStore((state) => state.zoom)
  const moveTo = useStore((state) => state.moveTo)
  const setMoveTo = useStore((state) => state.setMoveTo)
  const setHome = useStore((state) => state.setHome)
  const setBounds = useStore((state) => state.setBounds)

  useEffect(() => {
    camera.zoom = zoom
    camera.updateProjectionMatrix()
  }, [zoom])

  useEffect(() => {
    if (Array.isArray(moveTo)) {
      camera.position.set(moveTo[0], moveTo[1], 50)
      camera.updateProjectionMatrix()
    }
  }, [moveTo])

  useMemo(() => {
    const start = items.reduce((acc, { position }) => {
      if (acc.length !== 0) {
        let res = acc
        res[0] = acc[0] > position[0] ? position[0] : acc[0]
        res[1] = acc[1] < position[1] ? position[1] : acc[1]
        res[2] = acc[2] < position[0] ? position[0] : acc[2]
        res[3] = acc[3] > position[1] ? position[1] : acc[3]
        return res
      }

      return [position[0], position[1], position[0], position[1]]
    }, [])

    setHome([start[0], start[1]])
    setBounds(start);
    setMoveTo([start[0], start[1]])
  }, [items])

  return null
}

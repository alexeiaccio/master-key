import { useEffect, useMemo } from 'react'
import { useThree } from 'react-three-fiber'
import { ArcCurve } from 'three'

import { useStore } from '../hooks/useStore'

export default function MainSceneManager({ positions }) {
  const { camera } = useThree()
  const zoom = useStore((state) => state.zoom)
  const moveTo = useStore((state) => state.moveTo)
  const setMoveTo = useStore((state) => state.setMoveTo)

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
    const start = positions.reduce((acc, { position }) => {
      if (acc.length !== 0) {
        let res = acc
        res[0] = acc[0] > position[0] ? position[0] : acc[0]
        res[1] = acc[1] < position[1] ? position[1] : acc[1]
        return res
      }

      return [position[0], position[1]]
    }, [])

    setMoveTo([start[0] + 10, start[1] - 5])
  }, [positions])

  return null
}

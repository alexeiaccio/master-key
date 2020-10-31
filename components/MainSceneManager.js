import { useEffect, useMemo } from 'react'
import { useThree } from 'react-three-fiber'
import { ArcCurve } from 'three'

import { useStore } from '../hooks/useStore'

export default function MainSceneManager({ items }) {
  const { camera } = useThree()
  const zoom = useStore((state) => state.zoom)
  const moveTo = useStore((state) => state.moveTo)
  const moveToHome = useStore((state) => state.moveToHome)
  const setHome = useStore((state) => state.setHome)
  const setBounds = useStore((state) => state.setBounds)
  const height = useStore((state) => state.height)
  const width = useStore((state) => state.width)
  const positionX = useStore((state) => state.positionX)
  const positionY = useStore((state) => state.positionY)
  const bounds = useStore((state) => state.bounds)
  const moveToLeft = useStore((state) => state.moveToLeft)
  const moveToRight = useStore((state) => state.moveToRight)
  const moveToTop = useStore((state) => state.moveToTop)
  const moveToBottom = useStore((state) => state.moveToBottom)

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
        res[0] = acc[0] > position[0] ? position[0] - 5 : acc[0]
        res[1] = acc[1] < position[1] ? position[1] + 5 : acc[1]
        res[2] = acc[2] < position[0] ? position[0] : acc[2]
        res[3] = acc[3] > position[1] ? position[1] : acc[3]
        return res
      }

      return [position[0], position[1], position[0], position[1]]
    }, [])

    setHome([start[0] + width * 0.01, start[1] - height * 0.01 - 0.6])
    setBounds(start)
    moveToHome()
  }, [items, width, height])

  useEffect(() => {
    if (positionX > (bounds?.[2] || 0)) {
      moveToLeft()
    }
    if (positionX < (bounds?.[0] || 0)) {
      moveToRight()
    }
    if (positionY > (bounds?.[1] || 0) + height * 0.001) {
      moveToBottom()
    }
    if (positionY < (bounds?.[3] || 0) - height * 0.001) {
      moveToTop()
    }
  }, [positionX, positionY, bounds])

  return null
}

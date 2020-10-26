import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export function useTurnable(axis) {
  const ref = useRef()

  useFrame(() => {
    if (axis) {
      ref.current.rotation[axis] += 0.01
    }
  })

  return ref
}

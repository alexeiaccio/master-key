import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export function useTurnable(axis = 'z') {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation[axis] += 0.01
  })

  return ref
}

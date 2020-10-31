import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export function useTurnable(axis, rotationLimits) {
  const ref = useRef()
  const up = useRef(true)

  useFrame(() => {
    if (axis) {
      if (rotationLimits) {
        const current = ref.current.rotation[axis]
        if (up.current && current >= Math.PI / 2) {
          up.current = false
        } else if (!up.current && current <= 0) {
          up.current = true
        }
        ref.current.rotation[axis] = up.current ? current + Math.PI / 45 : current - Math.PI / 45
      } else {
        ref.current.rotation[axis] += Math.PI / 45
      }
    }
  })

  return ref
}

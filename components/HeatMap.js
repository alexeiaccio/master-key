import { forwardRef, useEffect, useRef } from 'react'

import h337 from '../lib/heatmap'

function HeatMap() {
  const map = useRef()

  useEffect(() => {
    if (map.current) {
      const heatmap = h337.create({
        container: map.current,
        maxOpacity: 0.6,
        radius: 50,
        blur: 1,
        // backgroundColor with alpha so you can see through it
        backgroundColor: 'rgba(0, 0, 58, 0.96)',
      })

      const { width, height } = map.current.getBoundingClientRect()

      // generate 100 datapoints
      const generate = function () {
        // randomly generate extremas
        const extremas = [(Math.random() * 100) >> 0, (Math.random() * 100) >> 0]
        const max = Math.max.apply(Math, extremas)
        const min = Math.min.apply(Math, extremas)
        const t = []

        for (let i = 0; i < 200; i++) {
          const x = (Math.random() * width) >> 0
          const y = (Math.random() * height) >> 0
          const c = ((Math.random() * max - min) >> 0) + min
          // btw, we can set a radius on a point basis
          const r = 30 //(Math.random()* 30) >> 0;
          // add to dataset
          t.push({ x: x, y: y, value: c, radius: r })
        }
        const init = +new Date()
        // set the generated dataset
        heatmap.setData({
          min: min,
          max: max,
          data: t,
        })
        console.log('took ', +new Date() - init, 'ms')
      }
      // initial generate
      generate()
    }
  }, [map.current])
  return <div ref={map} className="w-full h-full" />
}

export default HeatMap

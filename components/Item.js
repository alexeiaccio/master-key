import { useAspect, Plane } from '@react-three/drei'

import GifItem from './GifItem'
import GLTFItem from './GLTFItem'
import ImageItem from './ImageItem'
import VideoItem from './VideoItem'
import TextItem from './TextItem'

export default function Item({ position, index, item }) {
  const [x, y, w, h] = position
  const [scW, scH, csZ] = useAspect('contain', 1200, 1200, 1)

  if (item && item.type === 'image') {
    return (
      <ImageItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'gif') {
    return (
      <GifItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'video') {
    return (
      <VideoItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }
  if (item && item.type === 'object') {
    return <GLTFItem index={index} item={item} position={[x, y, index]} />
  }
  if (item && item.type === 'text') {
    return (
      <TextItem
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    )
  }

  return (
    <Plane
      scale={[w || scW, h || scH, csZ]}
      args={[0, 0, 1, 1]}
      position={[x, y, index]}
    >
      <meshPhongMaterial attach="material" wireframe />
    </Plane>
  )
}

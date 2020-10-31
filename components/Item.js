import { useAspect, Plane, Html } from '@react-three/drei'

import GifItem from './GifItem'
import GLTFItem from './GLTFItem'
import ImageItem from './ImageItem'
import VideoItem from './VideoItem'
import TextItem from './TextItem'
import Text from './Text'
import MasterKey from './MasterKey'

export default function Item({ item }) {
  const { index, position } = item
  const [x, y, w, h] = position
  const [scW, scH, csZ] = useAspect('contain', 1200, 1200, 1)

  if (item && item.type === 'image') {
    return (
      <ImageItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, 1]}
        position={[x, y, 1]}
      />
    )
  }
  if (item && item.type === 'gif') {
    return (
      <GifItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, 1]}
      />
    )
  }
  if (item && item.type === 'video') {
    return (
      <VideoItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, 1]}
      />
    )
  }
  if (item && item.type === 'object') {
    return <GLTFItem index={index} item={item} position={[x, y, 1]} />
  }
  if (item && item.type === 'text') {
    return (
      <TextItem
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, 1]}
      />
    )
  }
  if (item && item.type === 'about') {
    return (
      <group scale={[w || scW, h || scH, csZ]} position={[x - 3.5, y + 4.5, 1]}>
        <MasterKey />
        <Html scaleFactor={0.02} position={[-0.15, -0.1, 1]}>
          <Text />
        </Html>
      </group>
    )
  }

  return (
    <Plane
      scale={[w || scW, h || scH, csZ]}
      args={[0, 0, 1, 1]}
      position={[x, y, 1]}
    >
      <meshBasicMaterial attach="material" wireframe />
    </Plane>
  )
}

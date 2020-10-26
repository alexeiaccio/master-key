import { useAspect, Plane, Html } from '@react-three/drei'

import GifItem from './GifItem'
import GLTFItem from './GLTFItem'
import ImageItem from './ImageItem'
import VideoItem from './VideoItem'
import TextItem from './TextItem'
import Text from './Text'

export default function Item({ item }) {
  const { index, position } = item
  const [x, y, w, h] = position
  const [scW, scH, csZ] = useAspect('contain', 1200, 1200, 1)

  if (item && item.type === 'image') {
    return (
      <ImageItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index / 2]}
      />
    )
  }
  if (item && item.type === 'gif') {
    return (
      <GifItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index / 2]}
      />
    )
  }
  if (item && item.type === 'video') {
    return (
      <VideoItem
        index={index}
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index / 2]}
      />
    )
  }
  if (item && item.type === 'object') {
    return <GLTFItem index={index} item={item} position={[x, y, index / 2]} />
  }
  if (item && item.type === 'text') {
    return (
      <TextItem
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index / 2]}
      />
    )
  }
  if (item && item.type === 'about') {
    return (
      <Html
        scaleFactor={0.02}
        scale={[w || scW, h || scH, csZ]}
        position={[x - 10, y + 5, index / 2]}
      >
        <div className="relative cursor-default">
          <Text />
          <div
            className="absolute bottom-0 bg-no-repeat bg-contain transform translate-y-full"
            style={{
              width: '60rem',
              height: '20rem',
              backgroundImage: 'url(/textures/000.png)',
            }}
          />
        </div>
      </Html>
    )
  }

  return (
    <Plane
      scale={[w || scW, h || scH, csZ]}
      args={[0, 0, 1, 1]}
      position={[x, y, index / 2]}
    >
      <meshPhongMaterial attach="material" wireframe />
    </Plane>
  )
}

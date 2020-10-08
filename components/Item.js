// import { useMemo } from "react";
// import * as THREE from "three";
import { useAspect, Plane, Html } from "@react-three/drei";
import { useCallback, useState, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

import GifLoader from "../lib/gif-loader";

function Image({ item, scale, ...props }) {
  const [scW, scH, csZ] = scale;
  const [map] = useLoader(TextureLoader, [item.src]);
  const ratio = map.image.height / map.image.width;
  const isVertical = ratio > 1;
  const h = map && map.image ? ratio * scW : scH;
  const w = map && map.image ? scH / ratio : scW;

  return (
    <Plane
      scale={[isVertical ? w : scW, isVertical ? scH : h, csZ]}
      args={[0, 0, 1, 1]}
      {...props}
    >
      <meshPhongMaterial attach="material" map={map} transparent />
    </Plane>
  );
}
function Video({ item, ...props }) {
  const video = useRef();
  const [play, toggle] = useState(false);

  const hanleClick = useCallback(() => {
    if (video.current && video.current.play) {
      try {
        if (play) {
          video.current.pause();
        } else {
          video.current.play();
        }
        toggle((x) => !x);
      } catch (error) {
        //
      }
    }
  }, [video.current, play]);
  return (
    <Plane onClick={hanleClick} {...props}>
      <meshBasicMaterial transparent />
      <Html prepend center scaleFactor={0.03}>
        <video ref={video} loop crossOrigin="anonymous" playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
      </Html>
    </Plane>
  );
}
function Gif({ item, scale, ...props }) {
  const [scW, scH, csZ] = scale;
  // instantiate a loader
  const loader = new GifLoader();

  // load a image resource
  const map = loader.load(
    // resource URL
    item.src,

    // onLoad callback
    function read(reader) {
      // You probably don't need to set onLoad, as it is handled for you. However,
      // if you want to manipulate the reader, you can do so here:
      console.log(reader.numFrames());
    },

    // onProgress callback
    function pr(xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },

    // onError callback
    function cb() {
      console.error("An error happened.");
    }
  );

  const h = map && map.image ? (map.image.height / map.image.width) * scW : scH;

  return (
    <Plane scale={[scW, h, csZ]} args={[0, 0, 1, 1]} {...props}>
      <meshBasicMaterial attach="material" map={map} transparent />
    </Plane>
  );
}

export default function Item({ position, index, item }) {
  const [x, y, w, h] = position;
  const [scW, scH, csZ] = useAspect("contain", 1200, 1200, 1);

  if (item && item.type === "image") {
    return (
      <Image
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    );
  }
  if (item && item.type === "gif") {
    return (
      <Gif
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    );
  }
  if (item && item.type === "video") {
    return (
      <Video
        item={item}
        scale={[w || scW, h || scH, csZ]}
        position={[x, y, index]}
      />
    );
  }

  return (
    <Plane
      scale={[w || scW, h || scH, csZ]}
      args={[0, 0, 1, 1]}
      position={[x, y, index]}
    >
      <meshPhongMaterial attach="material" wireframe />
    </Plane>
  );
}

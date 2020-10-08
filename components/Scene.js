import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { MapControls } from "@react-three/drei";

import Item from "./Item";
import shuffleArray from "../lib/shuffleArray";

function MainScene({ items, positions }) {
  const shuffledItems = shuffleArray(items);

  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 50], zoom: 50, up: [0, 0, 1], far: 1000 }}
    >
      <color attach="background" args={[0xfff389]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        {positions.map(({ position, index }) => (
          <Item
            key={`item-${index}`}
            position={position}
            index={index}
            item={shuffledItems[index]}
          />
        ))}
        <MapControls enableDamping enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}

export default function Scene(props) {
  return (
    <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <MainScene {...props} />
      </div>
    </div>
  );
}

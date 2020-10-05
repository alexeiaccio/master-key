import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { MapControls } from "@react-three/drei";

import Item from "./Item";

export default function Scene({ items, positions }) {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 50], zoom: 50, up: [0, 0, 1], far: 1000 }}
    >
      <color attach="background" args={[0xfff389]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        {positions.map(({ position, index }) => (
          <Item key={`item-${index}`} position={position} index={index} item={items[index]} />
        ))}
        <MapControls enableDamping enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}

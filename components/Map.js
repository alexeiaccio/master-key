import React, { Suspense, useState, useRef, useEffect, useMemo } from "react";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { Canvas, Dom, useLoader, useFrame, useThree } from "react-three-fiber";
import { TextureLoader, LinearFilter } from "three";
import {
  Text,
  MapControls,
  useAspect,
  Plane,
  useTextureLoader,
} from "@react-three/drei";

// function Cell(props) {
//   const { color, shape, fillOpacity } = props;

//   return (
//     <mesh>
//       <meshBasicMaterial
//         attach="material"
//         color={color}
//         opacity={fillOpacity}
//         depthWrite={false}
//         transparent
//       />
//       <shapeBufferGeometry attach="geometry" args={[shape]} />
//     </mesh>
//   );
// }

// function Svg() {
//   const [center, setCenter] = useState([0, 0, 0]);
//   const ref = useRef();

//   const { paths } = useLoader(SVGLoader, "map.svg");

//   const shapes = useMemo(
//     () =>
//       paths.flatMap((p) =>
//         p.toShapes(true).map((shape) => ({
//           shape,
//           color: p.color,
//           fillOpacity: p.userData.style.fillOpacity,
//         }))
//       ),
//     [paths]
//   );

//   useEffect(() => {
//     const box = new Box3().setFromObject(ref.current);
//     const sphere = new Sphere();
//     box.getBoundingSphere(sphere);
//     setCenter([-sphere.center.x, -sphere.center.y, 0]);
//   }, []);

//   return (
//     <group position={center} ref={ref}>
//       {shapes.map((props) => (
//         <Cell key={props.shape.uuid} {...props} />
//       ))}
//     </group>
//   );
// }

function Simple() {
  const scale = useAspect("cover", 1200, 1200, 1);
  const [matcap2] = useTextureLoader(["/textures/firetex.png"]);
  const [image] = useLoader(TextureLoader, [
    "https://source.unsplash.com/random/1200x1200",
  ]);

  return (
    <>
      <Plane scale={scale} position={[40, 10, 0]}>
        <meshPhongMaterial attach="material" map={image} color="grey" />
      </Plane>
      <Plane scale={scale} args={[0, 0, 1, 1]} position={[-40, 0, 1]}>
        <meshPhongMaterial attach="material" wireframe />
        <meshMatcapMaterial attach="material" matcap={matcap2} />
      </Plane>
    </>
  );
}

function Mesh() {
  // const { viewport, camera } = useThree();

  const mesh = useRef();
  // console.log(viewport(camera, mesh));
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
      <meshStandardMaterial color="grey" attach="material" />
    </mesh>
  );
}

function Paragraph() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <Text
      ref={ref}
      color={"#EC2D2D"}
      fontSize={5}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign={"left"}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      position={[10, 50, 2]}
    >
      LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
      TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
      VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
      COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE
      VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT
      CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID
      EST LABORUM.
    </Text>
  );
}

function Log() {
  const three = useThree();
  console.log(three);
  return null;
}

export default function Map() {
  return (
    <Canvas
      // concurrent
      // pixelRatio={1}
      orthographic
      camera={{ position: [0, 0, 50], zoom: 50, up: [0, 0, 1], far: 10000 }}
    >
      <color attach="background" args={[0xfff389]} />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Simple />
        <Mesh />
        <Paragraph />
        {/* <Log /> */}
        <MapControls enableDamping enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}

/* 
{
  "index": 15,
  "type": "video",
  "src": "AgCVriJ8mxg",
  "shadow": false
},
{
  "index": 16,
  "type": "video",
  "src": "Wg5dZCjKmGo",
  "shadow": false
},
*/

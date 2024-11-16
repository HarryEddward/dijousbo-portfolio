import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";

export function Cube3D() {
  return (
    <Canvas camera={{ position: [5.5, 5.5, 5.5] }}>
      {/* Luz ambiental para una iluminación general */}
      <ambientLight intensity={3} />
      {/* Luz direccional para destacar las caras */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      {/* Luz secundaria desde otro ángulo */}
      <directionalLight position={[-10, -5, 10]} intensity={0.8} />
      {/* Componente del cubo */}
      <mesh scale={[6, 6, 6]} castShadow>
        {/* Geometría del cubo */}
        <boxGeometry args={[1, 1, 1]} />
        {/* Material estándar con un ligero metalizado */}
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.3}
          metalness={0.5}
        />
        {/* Bordes para resaltar contornos */}
        <Edges color="white" />
      </mesh>
      {/* Control de cámara */}
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={true}
        maxDistance={15}
        minDistance={3}
      />
    </Canvas>
  );
}

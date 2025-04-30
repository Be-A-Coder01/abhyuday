import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function SpaceshipModel() {
  const ref = useRef();
  const { scene } = useGLTF(
    "clientpublicmodels\realistic_spaceship_placeholder.glb"
  ); // Path from public folder

  // Rotation animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} ref={ref} scale={1.5} />;
}

export default function SpaceshipCanvas() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} />
        <Suspense fallback={null}>
          <SpaceshipModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

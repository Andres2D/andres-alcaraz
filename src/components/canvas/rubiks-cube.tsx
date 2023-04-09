import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from './loader';
import { useGLTF, OrbitControls, Preload } from '@react-three/drei';

const Cube = () => {
  const cube = useGLTF('./models/rubiks_cube/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-40, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[50, -40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={cube.scene}
        scale={0.015}
        position={[0, 0, 0]}
        rotation={[2, 0, 10]}
      />
    </mesh>
  );
};

const CubeCanvas = () => (
  <Canvas
    shadows
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls autoRotate enableZoom={false} />
      <Cube />
    </Suspense>
  </Canvas>
);

export default CubeCanvas;

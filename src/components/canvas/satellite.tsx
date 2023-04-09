import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from './loader';
import {
  useGLTF,
  OrbitControls,
  Preload
} from '@react-three/drei';

const Satellite = () => {
  const satellite = useGLTF('./models/simple_satellite/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight 
        intensity={0.30}
        groundColor='black' 
      />
      <pointLight
        intensity={1}  
      />
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
        object={satellite.scene}
        scale={0.30}
        position={[0,1,0]}
        rotation={[2,0,10]}
      />
    </mesh>
  )
};

const SatelliteCanvas = () => (
  <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Satellite />
      </Suspense>
    </Canvas>
);

export default SatelliteCanvas;

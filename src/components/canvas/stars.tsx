import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as styles from './stars.module.scss';

const Stars = (props: any) => {
  const ref = useRef<any>();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; 
    ref.current.rotation.y -= delta / 15; 
  });

  const sphere: number = random.inSphere(new Float32Array(500),
  { radius: 1.2 });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}
        frustumCulled {...props} >
          <PointMaterial 
            transparent
            color='#F272C8'
            size={0.003}
            sizeAttenuation={true}
            depthWrite={false}
          />
      </Points>
    </group>
  )
};

const StartsCanvas = () => {
  return (
    <div className={styles.starsContainer}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StartsCanvas;

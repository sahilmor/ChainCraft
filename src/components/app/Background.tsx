import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Points, PointMaterial, Mesh } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';
import { Vector3 } from 'three';

extend(THREE);

export function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  const mousePosition = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Add subtle movement based on mouse position
      const { x, y } = mousePosition.current;
      ref.current.rotation.x += x * delta * 0.5;
      ref.current.rotation.y += y * delta * 0.5;
    }
  });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Mesh rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Mesh>
  );
}
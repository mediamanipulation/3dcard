import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function CardComponent() {
  const cardRef = useRef();

  useFrame(({ camera }) => {
    if (cardRef.current) {
      cardRef.current.lookAt(camera.position);
    }
  });

  return (
    <group ref={cardRef} position={[0, 0.1, 2]}>
      {/* Main Card Body */}
      <mesh position={[0, 0, 0]} scale={[1, 0.2, 1.5]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'white'} />
      </mesh>

      {/* Beveled Edges - Four Planes */}
      <mesh position={[0.5, 0, 0.75]} rotation={[0, Math.PI/2, 0]} scale={[0.03, 0.2, 1.5]}>
        <planeBufferGeometry args={[1, 1]} />
        <meshStandardMaterial color={'white'} side={2} />
      </mesh>
      <mesh position={[-0.5, 0, 0.75]} rotation={[0, -Math.PI/2, 0]} scale={[0.03, 0.2, 1.5]}>
        <planeBufferGeometry args={[1, 1]} />
        <meshStandardMaterial color={'white'} side={2} />
      </mesh>
      <mesh position={[0, 0.1, 1.53]} rotation={[Math.PI/2, 0, 0]} scale={[1, 0.03, 1]}>
        <planeBufferGeometry args={[1, 1]} />
        <meshStandardMaterial color={'white'} side={2} />
      </mesh>
      <mesh position={[0, 0.1, -1.53]} rotation={[-Math.PI/2, 0, 0]} scale={[1, 0.03, 1]}>
        <planeBufferGeometry args={[1, 1]} />
        <meshStandardMaterial color={'white'} side={2} />
      </mesh>
    </group>
  );
}

export default CardComponent;

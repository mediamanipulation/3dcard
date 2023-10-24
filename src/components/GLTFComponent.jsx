// GLTFComponent.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function GLTFComponent({ modelPath }) {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);
 // ** uncomment the following line to make the model rotate
  // useFrame(() => {
  //   if (ref.current) {
  //     ref.current.rotation.y += 0.01;
  //   }
  // });
  return <primitive ref={ref} object={scene} />;
}

export { GLTFComponent }; // Named export

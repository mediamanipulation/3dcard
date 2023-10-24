import React from 'react';
import { Canvas } from '@react-three/fiber';
import BoxComponent from './BoxComponent';
import { GLTFComponent } from '/src/components/GLTFComponent.jsx';
import CardComponent from './CardComponent';
import ThreePointLighting from './ThreePointLighting';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} backgroundColor="black">
      <ThreePointLighting />
      <GLTFComponent modelPath="/object.glb" />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;



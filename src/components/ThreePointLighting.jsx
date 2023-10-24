import React from 'react';

function ThreePointLighting() {
  return (
    <>
      <pointLight intensity={5} position={[2, 2, 5]} />  {/* Key Light - increased intensity */}
      <pointLight intensity={5} position={[-2, 2, 5]} /> {/* Fill Light */}
      <pointLight intensity={2} position={[0, -2, -5]} /> {/* Back Light */}
    </>
  );
}

export default ThreePointLighting;

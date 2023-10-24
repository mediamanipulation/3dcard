// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { Box } from '@react-three/drei';

// function BoxComponent() {
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0.5, 0]}>
//       <meshStandardMaterial color={'hotpink'} />
//     </Box>
//   );
// }

// export default BoxComponent;
import React from 'react';

function BoxComponent() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  );
}

export default BoxComponent;

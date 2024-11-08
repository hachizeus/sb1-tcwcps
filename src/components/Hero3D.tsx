import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

function Scene() {
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
      <motion.mesh
        scale={2}
        animate={{
          rotateY: Math.PI * 2,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.3}
          metalness={0.8}
        />
      </motion.mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Scene />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
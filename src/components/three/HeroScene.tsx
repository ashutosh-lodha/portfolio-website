import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
  Sparkles,
  Environment,
} from "@react-three/drei";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import * as THREE from "three";

function Core({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const s = scrollRef.current;
    meshRef.current.rotation.y += delta * (0.25 + s * 1.2);
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2 + s * 0.6;
    const scale = 1 + Math.sin(t * 0.8) * 0.04 + s * 0.15;
    meshRef.current.scale.setScalar(scale);
    if (matRef.current) {
      matRef.current.distort = 0.35 + Math.sin(t * 0.6) * 0.05 + s * 0.25;
      matRef.current.speed = 1.5 + s * 2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <Icosahedron ref={meshRef} args={[1.6, 4]}>
        <MeshDistortMaterial
          ref={matRef}
          color="#00e5ff"
          emissive="#7c3aed"
          emissiveIntensity={0.45}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.5}
        />
      </Icosahedron>
    </Float>
  );
}

function Rings({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const s = scrollRef.current;
    groupRef.current.rotation.z += delta * 0.15;
    groupRef.current.rotation.x = -0.4 + s * 0.8;
    groupRef.current.rotation.y += delta * 0.05;
  });
  return (
    <group ref={groupRef}>
      <Torus args={[2.4, 0.012, 16, 200]}>
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.2}
          transparent
          opacity={0.55}
        />
      </Torus>
      <Torus args={[2.9, 0.008, 16, 200]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.2}
          transparent
          opacity={0.55}
        />
      </Torus>
      <Torus args={[3.4, 0.006, 16, 200]} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={0.9}
          transparent
          opacity={0.4}
        />
      </Torus>
    </group>
  );
}

function NodeShard({
  position,
  color,
  scrollRef,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scrollRef: React.MutableRefObject<number>;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed;
    const s = scrollRef.current;
    ref.current.position.x = basePos.x + Math.sin(t) * 0.15;
    ref.current.position.y = basePos.y + Math.cos(t * 0.8) * 0.2 + s * 0.4;
    ref.current.position.z = basePos.z + Math.sin(t * 0.5) * 0.1;
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.y = t * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.18, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.4}
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  );
}

export function HeroScene() {
  const scrollRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const heroProgress = useTransform(scrollYProgress, [0, 0.25], [0, 1], {
    clamp: true,
  });
  useMotionValueEvent(heroProgress, "change", (v) => {
    scrollRef.current = v;
  });

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00e5ff" />
      <pointLight position={[-5, -3, 2]} intensity={1.4} color="#7c3aed" />
      <pointLight position={[0, -4, 4]} intensity={0.6} color="#a78bfa" />

      <Suspense fallback={null}>
        <Core scrollRef={scrollRef} />
        <Rings scrollRef={scrollRef} />
        <NodeShard position={[2.6, 1.2, 0.5]} color="#00e5ff" scrollRef={scrollRef} speed={0.9} />
        <NodeShard position={[-2.7, -0.8, 0.8]} color="#7c3aed" scrollRef={scrollRef} speed={1.2} />
        <NodeShard position={[1.8, -1.6, -0.4]} color="#a78bfa" scrollRef={scrollRef} speed={0.7} />
        <NodeShard position={[-2.2, 1.7, -0.6]} color="#00e5ff" scrollRef={scrollRef} speed={1.1} />
        <Sparkles count={80} scale={[7, 5, 4]} size={2.4} speed={0.5} color="#00e5ff" opacity={0.8} />
        <Sparkles count={50} scale={[8, 6, 4]} size={1.6} speed={0.3} color="#7c3aed" opacity={0.6} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

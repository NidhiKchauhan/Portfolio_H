"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type NodeDef = {
  x: number;
  y: number;
  z: number;
  label: string;
  rotSpeedX: number;
  rotSpeedY: number;
  bobSpeed: number;
  bobPhase: number;
};

const NODES: NodeDef[] = [
  { x: -5.2, y: -0.7, z: -2.4, label: "CLIENT", rotSpeedX: 0.22, rotSpeedY: 0.31, bobSpeed: 0.6, bobPhase: 0 },
  { x: -2.4, y: 1.0, z: 1.8, label: "RESOLVER", rotSpeedX: 0.18, rotSpeedY: -0.26, bobSpeed: 0.5, bobPhase: 1.2 },
  { x: 0.2, y: -1.0, z: -3.2, label: "ROOT", rotSpeedX: -0.24, rotSpeedY: 0.2, bobSpeed: 0.65, bobPhase: 2.4 },
  { x: 2.6, y: 0.85, z: 2.6, label: "TLD", rotSpeedX: 0.16, rotSpeedY: 0.28, bobSpeed: 0.55, bobPhase: 3.6 },
  { x: 5.3, y: -0.4, z: -1.6, label: "AUTH", rotSpeedX: -0.2, rotSpeedY: -0.22, bobSpeed: 0.7, bobPhase: 4.8 },
];

const INTRO_SECONDS = 2.2;
const PARTICLE_COUNT = 60;

// Computed once at module load (not during render) — a fixed field of ambient particle positions.
const PARTICLE_POSITIONS = (() => {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
  }
  return positions;
})();

function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function Box({
  node,
  color,
  ink,
  isLast,
}: {
  node: NodeDef;
  color: string;
  ink: string;
  isLast: boolean;
}) {
  const ref = React.useRef<THREE.Mesh>(null);
  const size = isLast ? 1.05 : 0.85;

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * node.rotSpeedX;
    ref.current.rotation.y += delta * node.rotSpeedY;
    ref.current.position.y = node.y + Math.sin(state.clock.elapsedTime * node.bobSpeed + node.bobPhase) * 0.35;
  });

  return (
    <mesh ref={ref} position={[node.x, node.y, node.z]}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
      <mesh scale={1.01}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={ink} wireframe transparent opacity={0.5} />
      </mesh>
    </mesh>
  );
}

/** Cheap ambient depth cue: a static point cloud that drifts as one rigid group (no per-particle shader). */
function Particles({ color }: { color: string }) {
  const groupRef = React.useRef<THREE.Points>(null);
  const geometry = React.useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(PARTICLE_POSITIONS, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={groupRef} geometry={geometry}>
      <pointsMaterial color={color} size={0.05} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

function TraceLine({ points, color }: { points: THREE.Vector3[]; color: string }) {
  // Built imperatively (not the `<line>` JSX tag) — that tag name collides with SVG's
  // intrinsic <line> element in React's JSX namespace and breaks type-checking.
  const lineObj = React.useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineDashedMaterial({ color, dashSize: 0.16, gapSize: 0.12, transparent: true, opacity: 0.7 });
    const line = new THREE.Line(geo, mat);
    line.computeLineDistances();
    return line;
  }, [points, color]);

  return <primitive object={lineObj} />;
}

function Scene({
  accentSignal,
  accentPass,
  lineColor,
  ink,
  bg,
  active,
}: {
  accentSignal: string;
  accentPass: string;
  lineColor: string;
  ink: string;
  bg: string;
  active: boolean;
}) {
  const { camera, invalidate } = useThree();
  const pulseRef = React.useRef<THREE.Mesh>(null);
  const elapsed = React.useRef(0);
  const scrollProgress = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      scrollProgress.current = Math.min(Math.max(window.scrollY / 700, 0), 1);
      if (active) invalidate();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linePoints = React.useMemo(() => NODES.map((n) => new THREE.Vector3(n.x, n.y, n.z)), []);

  /* eslint-disable react-hooks/immutability -- R3F's render loop is imperative by design: mutating three.js objects (camera) inside useFrame is the standard, documented pattern, not a React state update. */
  useFrame((state, delta) => {
    elapsed.current += delta;

    const autoDrift = Math.sin(elapsed.current * 0.12) * 1.1;
    const targetX = state.pointer.x * 3.2 + autoDrift;
    const targetY = state.pointer.y * 1.4 + 0.4;
    const targetZ = 8 - scrollProgress.current * 2.5;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.lookAt(0, 0, 0);

    if (pulseRef.current) {
      const introT = Math.min(elapsed.current / INTRO_SECONDS, 1);
      const eased = easeOutExpo(introT);
      const segment = eased * (NODES.length - 1);
      const i = Math.min(Math.floor(segment), NODES.length - 2);
      const localT = segment - i;
      const a = NODES[i];
      const b = NODES[i + 1];
      const x = THREE.MathUtils.lerp(a.x, b.x, localT);
      const y = THREE.MathUtils.lerp(a.y, b.y, localT);
      const z = THREE.MathUtils.lerp(a.z, b.z, localT);
      const bob = introT >= 1 ? Math.sin(elapsed.current * 1.3) * 0.15 : 0;
      pulseRef.current.position.set(x, y + bob, z);
    }

    if (active) invalidate();
  });
  /* eslint-enable react-hooks/immutability */

  return (
    <>
      <fog attach="fog" args={[bg, 15, 30]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[6, 8, 5]} intensity={1.3} />

      <gridHelper args={[24, 16, lineColor, lineColor]} position={[0, -2.4, 0]} />
      <Particles color={lineColor} />
      <TraceLine points={linePoints} color={lineColor} />

      {NODES.map((n, i) => (
        <Box key={n.label} node={n} color={i === NODES.length - 1 ? accentPass : accentSignal} ink={ink} isLast={i === NODES.length - 1} />
      ))}
      <mesh ref={pulseRef} position={[NODES[0].x, NODES[0].y, NODES[0].z]}>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial color={accentSignal} emissive={accentSignal} emissiveIntensity={0.6} />
      </mesh>
    </>
  );
}

export function DnsFieldScene({
  accentSignal,
  accentPass,
  lineColor,
  ink,
  bg,
}: {
  accentSignal: string;
  accentPass: string;
  lineColor: string;
  ink: string;
  bg: string;
}) {
  const [active, setActive] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting && !document.hidden), {
      threshold: 0.05,
    });
    io.observe(el);

    const onVisibility = () => setActive(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.4, 8], fov: 52 }}
      >
        <Scene
          accentSignal={accentSignal}
          accentPass={accentPass}
          lineColor={lineColor}
          ink={ink}
          bg={bg}
          active={active}
        />
      </Canvas>
    </div>
  );
}

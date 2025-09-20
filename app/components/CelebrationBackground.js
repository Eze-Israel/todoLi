"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function FloatingParticles({ completed }) {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
      group.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={group}>
      <Stars
        radius={50}
        depth={50}
        count={completed ? 3000 : 1000}
        factor={completed ? 15 : 8}
        saturation={completed ? 0.9 : 0}
        fade
        speed={completed ? 2 : 0.5}
      />
    </group>
  );
}

export default function CelebrationBackground({ completed }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <FloatingParticles completed={completed} />
      </Canvas>
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Bar({ progress, completed }) {
  const ref = useRef();
  const matRef = useRef();

  useFrame(() => {
    if (ref.current) {
      const target = completed ? 1 : 0.5; // half when not completed, full when checked
      ref.current.scale.x += (target - ref.current.scale.x) * 0.1;
    }

    if (matRef.current) {
      const targetColor = completed ? "#22c55e" : "#f97316"; // green when full
      // smooth color transition
      matRef.current.color.lerp(
        { r: targetColor === "#22c55e" ? 0.13 : 0.97, g: targetColor === "#22c55e" ? 0.77 : 0.45, b: targetColor === "#22c55e" ? 0.37 : 0.09 },
        0.1
      );
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 0.25, 0.25]} />
      <meshStandardMaterial ref={matRef} color={completed ? "#22c55e" : "#f97316"} />
    </mesh>
  );
}

export default function ProgressBar3D({ completed }) {
  return (
    <div className="relative w-full h-12">
      <Canvas orthographic camera={{ zoom: 80, position: [0, 0, 10] }}>
        <ambientLight intensity={0.6} />
        <Bar completed={completed} />
      </Canvas>

      {/* Label overlay */}
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-700 dark:text-gray-200">
        {completed ? "2/2 done" : "1/2"}
      </span>
    </div>
  );
}





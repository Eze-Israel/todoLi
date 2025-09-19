"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  completed: boolean;
}

export default function ProgressBar({ completed }: ProgressBarProps) {
  const progress = completed ? 100 : 50; 
  const color = completed ? "#22C55E" : "#F97316"; 

  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full my-4">
      <motion.div
        className="h-2 rounded-full "
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

     
    </div>
  );
}



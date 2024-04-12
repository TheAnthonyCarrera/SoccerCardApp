"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

interface FancySparklesProps {
    type: string;
    text: string;
    background: string;
    color: string;
    fontSize: string;
  }

  const FancySparkles: React.FC<FancySparklesProps> = ({ type, text, background, color, fontSize }) => {
    return (
      <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id={type || "tsparticles"}
            background={background || "transparent"}
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={color || "#FFFFFF"}
          />
        </div>
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          <span style={{fontSize: fontSize}}>{text}</span>
        </h1>
      </div>
    );
  }

  export default FancySparkles;

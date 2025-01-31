import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const Moon: React.FC = () => {
  const moonRef = useRef<THREE.Mesh>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  console.log(rotation);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const xOffset = (clientX / window.innerWidth - 0.5) * -0.5;
      const yOffset = (clientY / window.innerHeight - 0.5) * 0.5;
      setPosition({ x: xOffset, y: yOffset });
      setRotation({ x: yOffset * 0.5, y: xOffset * 0.5 });
    };

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;

      const adjustedBeta = beta - 90;

      const clampedBeta = Math.min(Math.max(adjustedBeta, -45), 45);
      const clampedGamma = Math.min(Math.max(gamma, -45), 45);

      const xOffset = (-clampedGamma / 45) * 0.5;
      const yOffset = (clampedBeta / 45) * 0.5;

      setPosition({ x: xOffset, y: yOffset });
      setRotation({ x: yOffset * 0.5, y: xOffset * 0.5 });
    };

    const requestPermission = () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        (DeviceOrientationEvent as any).requestPermission
      ) {
        (DeviceOrientationEvent as any)
          .requestPermission()
          .then((response: string) => {
            if (response === "granted") {
              window.addEventListener(
                "deviceorientation",
                handleDeviceOrientation
              );
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", requestPermission, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      window.removeEventListener("touchstart", requestPermission);
    };
  }, []);

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.005;
      moonRef.current.position.x = position.x;
      moonRef.current.position.y = position.y;
    }
  });

  return (
    <Sphere ref={moonRef} args={[2.5, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#7a86ff" roughness={1} metalness={0.1} />
      <pointLight intensity={1.5} position={[5, 5, 5]} />
    </Sphere>
  );
};

const Moons: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Moon />
    </Canvas>
  );
};

export default Moons;

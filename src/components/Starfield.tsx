import React, { useRef, useEffect } from "react";

const Starfield: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 300;
    const speed = 0.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    const updateStars = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        star.z -= speed;
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.z = canvas.width;
        }

        const scale = 200 / star.z;
        const x = (star.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * scale + canvas.height / 2;
        const radius = scale * 1.5;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      requestAnimationFrame(updateStars);
    };

    resizeCanvas();
    initializeStars();
    updateStars();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen -z-50"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Starfield;

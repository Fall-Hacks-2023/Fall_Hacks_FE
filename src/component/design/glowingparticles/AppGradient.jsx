import React, { useEffect, useRef } from 'react';
import { GlowParticle } from './GlowParticle'; // Assuming you have the GlowParticle class defined in a separate file

const COLORS = [
    { r: 34, g: 139, b: 34 },   // Forest Green
    { r: 0, g: 128, b: 0 },     // Green
    { r: 60, g: 179, b: 113 },  // Medium Sea Green
    { r: 46, g: 139, b: 87 },   // Sea Green
    { r: 0, g: 100, b: 0 },     // Dark Green
    { r: 107, g: 142, b: 35 },  // Olive Drab
    { r: 102, g: 205, b: 170 }, // Medium Aquamarine
    { r: 32, g: 178, b: 170 },  // Light Sea Green
    { r: 135, g: 206, b: 250 }, // Light Sky Blue
    { r: 70, g: 130, b: 180 },  // Steel Blue
    { r: 139, g: 69, b: 19 },   // Saddle Brown
    { r: 210, g: 180, b: 140 }, // Tan
    { r: 222, g: 184, b: 135 }, // Burly Wood
    { r: 244, g: 164, b: 96 },  // Sandy Brown
    { r: 218, g: 165, b: 32 }   // Goldenrod
];

// { r: 25, g: 100, b: 106 },
// { r: 0, g: 223, b: 150 },
// { r: 0, g: 198, b: 144 },
// { r: 3, g: 46, b: 62 },
// { r: 0, g: 206, b: 82 },
// ];

const gradientStyle = {
  minHeight: '7rem',
  maxHeight: '7rem',
  width: '100%',
  margin: 0,
  zIndex: -1,
  padding: 0,
  position: 'absolute',
  backgroundColor: 'green'
};

const AppGradient = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    let stageWidth = canvas.clientWidth;
    let stageHeight = canvas.clientHeight;
    let maxRadius = 900;
    let minRadius = 600;

    const resizeCanvas = () => {
      stageWidth = canvas.clientWidth;
      stageHeight = canvas.clientHeight;
      canvas.width = stageWidth * pixelRatio;
      canvas.height = stageHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.globalCompositeOperation = 'saturation';
    };

    const createParticles = () => {
      let curColor = 0;
      particles = [];

      for (let i = 0; i < 20; i++) {
        const item = new GlowParticle(
          Math.random() * stageWidth,
          Math.random() * stageHeight,
          Math.random() * (maxRadius - minRadius) + minRadius,
          COLORS[curColor]
        );
        curColor = (curColor + 1) % COLORS.length;
        particles.push(item);
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);

      particles.forEach((particle) => {
        particle.animate(ctx, stageWidth, stageHeight);
      });

      animationIdRef.current = requestAnimationFrame(animateParticles);
    };
    createParticles();
    animateParticles();
    resizeCanvas();
    animationIdRef.current = requestAnimationFrame(animateParticles);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const renderReportWriter = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = 'White';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textX = canvas.width / 2;
      const textY = canvas.height / 2;
      ctx.fillText('Report Writer', textX, textY);
    }
  };

  return (
    <>
      <canvas ref={canvasRef} style={gradientStyle} />
      {canvasRef.current && renderReportWriter()} {/* Move renderReportWriter() inside the return statement */}
    </>
  );
};

export default AppGradient;

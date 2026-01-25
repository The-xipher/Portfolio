"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const gridSize = 50; // Larger grid for cleaner look
        const dots: { x: number; y: number; baseOpacity: number; activeOpacity: number }[] = [];

        for (let x = 0; x < width; x += gridSize) {
            for (let y = 0; y < height; y += gridSize) {
                dots.push({
                    x,
                    y,
                    baseOpacity: 0.05, // Very faint
                    activeOpacity: 0,
                });
            }
        }

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach((dot) => {
                const dx = mouseX - dot.x;
                const dy = mouseY - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    dot.activeOpacity = (1 - dist / 200) * 0.4;
                } else {
                    dot.activeOpacity *= 0.9;
                }

                const opacity = Math.max(dot.baseOpacity, dot.activeOpacity);

                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White dots
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2); // Smaller dots
                ctx.fill();

                // Draw grid lines near mouse only for that "reveal" effect
                if (opacity > 0.1) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(dot.x - 5, dot.y);
                    ctx.lineTo(dot.x + 5, dot.y);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y - 5);
                    ctx.lineTo(dot.x, dot.y + 5);
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] bg-[#050505]"
            style={{ pointerEvents: "none" }}
        />
    );
}

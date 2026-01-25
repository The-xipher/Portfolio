"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
    { id: "home", yPct: 0.1 },
    { id: "skills", yPct: 0.3 },
    { id: "projects", yPct: 0.5 },
    { id: "experience", yPct: 0.7 },
    { id: "education", yPct: 0.8 },
    { id: "contact", yPct: 0.95 }
];

export default function CircuitNav() {
    const { scrollYProgress } = useScroll();
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    if (windowHeight === 0) return null;

    const mapHeight = windowHeight * 0.8;
    const startY = windowHeight * 0.1;

    const points = sections.map((s, i) => {
        const x = i % 2 === 0 ? 30 : 60;
        const y = startY + (i / (sections.length - 1)) * mapHeight;
        return { x, y, id: s.id };
    });

    let pathD = "";
    points.forEach((p, i) => {
        if (i === 0) {
            pathD += `M ${p.x} ${p.y}`;
        } else {
            const prev = points[i - 1];
            const midY = (prev.y + p.y) / 2;
            pathD += ` L ${prev.x} ${midY} L ${p.x} ${midY} L ${p.x} ${p.y}`;
        }
    });

    return (
        <div className="fixed left-0 top-0 bottom-0 z-50 w-24 hidden xl:block pointer-events-none">
            <svg className="h-full w-full">
                <path
                    d={pathD}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)" // Very faint trace
                    strokeWidth="2"
                />

                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="#ffffff" // White signal
                    strokeWidth="2"
                    style={{ pathLength }}
                    strokeLinecap="square"
                />

                {points.map((p, i) => (
                    <ChipNode key={p.id} x={p.x} y={p.y} href={`#${p.id}`} />
                ))}
            </svg>
        </div>
    );
}

function ChipNode({ x, y, href }: { x: number; y: number; href: string }) {
    return (
        <a href={href} className="pointer-events-auto cursor-pointer" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <rect x="-4" y="-4" width="8" height="8" fill="#050505" stroke="#52525b" strokeWidth="1" />
            <rect x="-2" y="-2" width="4" height="4" fill="#ffffff" className="animate-pulse-subtle" />
        </a>
    )
}

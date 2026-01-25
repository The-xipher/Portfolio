"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import Magnetic from "./Magnetic";
import { useEffect, useState } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "> Initializing system...\n> Loading modules...\n> Architecting the Future.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Subtle Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-mono mb-8">
                        <span>SYSTEM_ONLINE</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 font-mono">
                        AMITH_M_P<span className="text-gray-500">.</span>
                    </h1>

                    <div className="h-24 md:h-32 mb-8 flex items-start justify-center">
                        <div className="bg-transparent text-left w-full max-w-lg font-mono text-sm md:text-base text-gray-400">
                            <pre className="whitespace-pre-wrap flex justify-center">
                                <span>{text}</span>
                                <span className="cursor-blink bg-gray-400 ml-1" />
                            </pre>
                        </div>
                    </div>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed font-sans">
                        Full Stack Developer specializing in <span className="text-white font-medium">Java Enterprise</span>, <span className="text-white font-medium">Spring Boot</span>, and <span className="text-white font-medium">Next.js</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Magnetic>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-md font-mono text-sm tracking-wide transition-colors font-medium"
                            >
                                EXECUTE_PROJECTS
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="/Resume-Amith.pdf"
                                download
                                className="px-8 py-3 bg-transparent border border-white/20 hover:border-white hover:text-white text-gray-400 rounded-md font-mono text-sm tracking-wide transition-all flex items-center gap-2"
                            >
                                <Download size={16} />
                                GET_RESUME
                            </a>
                        </Magnetic>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6">
                        <SocialLink href="https://github.com/The-xipher" icon={<Github size={20} />} />
                        <SocialLink href="https://linkedin.com/in/amith-m-p-630301220" icon={<Linkedin size={20} />} />
                        <SocialLink href="mailto:amithmp676@gmail.com" icon={<Mail size={20} />} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors duration-300"
        >
            {icon}
        </a>
    )
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const projects = [
    {
        title: "ProactivePulse",
        description: "Agentic AI multi-agent system correlating helpdesk tickets with infrastructure metrics to surface root-cause hypotheses using AWS Bedrock and OpenSearch.",
        tech: ["Python", "FastAPI", "AWS Bedrock", "OpenSearch", "DynamoDB"],
        image: "linear-gradient(to bottom right, #ff9f43, #ff6b6b)",
        links: { github: "https://github.com/Asirwad/ProactivePulseAI", live: "#" }
    },
    {
        title: "HealthWise Hub",
        description: "AI-driven post-discharge care platform automating care plan generation and reducing physician review time by 40%.",
        tech: ["Next.js", "MongoDB", "Genkit", "Tailwind CSS"],
        image: "linear-gradient(to bottom right, #00C6FF, #0072FF)", // Placeholder gradient
        links: { github: "https://github.com/The-xipher/Healthwise-Sentinel/tree/master", live: "#" }
    },
    {
        title: "Qualen",
        description: "NLP-powered tool generating 80+ functional test scenarios per week from requirements, improving QA efficiency by 60%.",
        tech: ["AI/LLM", "TypeScript", "Genkit", "NLP"],
        image: "linear-gradient(to bottom right, #F53844, #42378F)",
        links: { github: "https://github.com/Asirwad/Qualen", live: "https://qualen.vercel.app/" }
    },
    {
        title: "Profinder",
        description: "Workforce hiring platform with real-time profile management and 25% faster data loading speeds.",
        tech: ["Angular", "Spring Boot", "MySQL", "JWT"],
        image: "linear-gradient(to bottom right, #CB2D3E, #EF473A)",
        links: { github: "https://github.com/The-xipher/PROFINDER", live: "#" }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full">
                                <div className="flex flex-col h-full">
                                    {/* Project Image Placeholder */}
                                    <div
                                        className="h-48 w-full relative overflow-hidden shrink-0"
                                        style={{ background: project.image }}
                                    >
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 mb-6 line-clamp-3 text-sm flex-grow">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 mt-auto">
                                            <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                                <Github size={16} /> Code
                                            </a>
                                            <a href={project.links.live} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

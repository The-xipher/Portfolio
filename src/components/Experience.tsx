"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Developer I – Software Engineering",
        company: "UST, Trivandrum",
        period: "Aug 2024 – Present",
        client: "Elevance Health",
        description: [
            "Engineered 10+ high-priority features for the 10xe application using Spring Boot and Java.",
            "Managed L3 production support, maintaining 99.9% application uptime.",
            "Reduced weekly support ticket volume by 15% through Root Cause Analysis and permanent fixes.",
            "Collaborated with stakeholders to optimize API response times."
        ]
    }
];

export default function Experience({ isEmbedded = false }: { isEmbedded?: boolean }) {
    return (
        <section id="experience" className={`${isEmbedded ? 'py-10' : 'py-20'} relative`}>
            <div className={`${isEmbedded ? 'w-full' : 'max-w-4xl mx-auto px-4'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative pl-8 md:pl-0 mb-12"
                        >
                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''} w-full`}>
                                <div className="hidden md:block w-5/12" />

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-black z-10 box-content" />

                                <div className="md:w-5/12 glass p-6 rounded-2xl hover:border-primary/50 transition-colors">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <div className="text-primary font-medium flex items-center gap-2">
                                            <Briefcase size={16} /> @ {exp.company}
                                        </div>
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <Calendar size={16} /> {exp.period}
                                        </div>
                                        {exp.client && (
                                            <div className="text-xs px-2 py-1 rounded bg-white/5 w-fit text-gray-300">
                                                Client: {exp.client}
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

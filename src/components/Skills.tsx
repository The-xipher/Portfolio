"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const skills = {
    Languages: ["Java", "Python", "C", "JavaScript", "TypeScript"],
    Backend: ["Spring Boot", "REST APIs", "Node.js", "JWT"],
    Frontend: ["Angular", "Next.js", "React", "Tailwind CSS"],
    Databases: ["MySQL", "MongoDB", "DynamoDB", "Firebase"],
    Cloud: ["AWS (Certified)", "Docker", "Git/GitHub"],
    AI: ["LLM Integration", "Google Genkit", "NLP"]
};

export default function Skills({ isEmbedded = false }: { isEmbedded?: boolean }) {
    return (
        <section id="skills" className={`${isEmbedded ? 'py-10' : 'py-20'} relative`}>
            <div className={`${isEmbedded ? 'w-full' : 'max-w-7xl mx-auto px-4'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-6 h-full bg-black/40">
                                <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                                <div className="space-y-4">
                                    {items.map((skill, i) => (
                                        <div key={skill} className="group">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill}</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    animate={{ width: "100%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

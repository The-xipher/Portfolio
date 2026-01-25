"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Education({ isEmbedded = false }: { isEmbedded?: boolean }) {
    return (
        <section className={`${isEmbedded ? 'py-10' : 'py-20'} relative`}>
            <div className={`${isEmbedded ? 'w-full' : 'max-w-6xl mx-auto px-4'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="glass p-8 rounded-2xl border-l-4 border-primary">
                            <h4 className="text-xl font-bold text-white mb-2">Bachelor of Technology</h4>
                            <p className="text-lg text-primary mb-1">Computer Science</p>
                            <p className="text-gray-400 mb-4">College of Engineering Attingal, Trivandrum</p>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>2020 – 2024</span>
                                <span className="font-medium text-white">CGPA: 8.25 / 10.0</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Award className="text-secondary" /> Certifications
                        </h3>
                        <div className="space-y-4">
                            <CertificationItem title="AWS Certified Cloud Practitioner" issuer="AWS" color="border-secondary" />
                            <CertificationItem title="AWS Partner: Accreditation (Technical)" issuer="AWS" color="border-accent" />
                            <CertificationItem title="Programming for Everybody (Python)" issuer="University of Michigan" color="border-primary" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function CertificationItem({ title, issuer, color }: { title: string; issuer: string; color: string }) {
    return (
        <div className={`glass p-6 rounded-xl border-l-4 ${color} hover:translate-x-2 transition-transform`}>
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-400">{issuer}</p>
        </div>
    );
}

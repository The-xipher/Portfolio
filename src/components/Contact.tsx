"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formState;

        // Sanitize
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        // Open mailto
        window.location.href = `mailto:amithmp676@gmail.com?subject=${subject}&body=${body}`;

        // Optional: clear form
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className={`${isEmbedded ? 'py-10' : 'py-20'} relative`}>
            <div className={`${isEmbedded ? 'w-full' : 'max-w-7xl mx-auto px-4'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Let's Connect</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop a message.
                        </p>

                        <div className="space-y-6">
                            <ContactItem icon={<Mail className="text-primary" />} label="Email" value="amithmp676@gmail.com" href="mailto:amithmp676@gmail.com" />
                            <ContactItem icon={<Phone className="text-secondary" />} label="Phone" value="+91 9496570660" href="tel:+919496570660" />
                            <ContactItem icon={<MapPin className="text-accent" />} label="Location" value="Trivandrum, Kerala, India" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={18} /> Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
    const content = (
        <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
            <div className="p-3 bg-white/5 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className="font-medium text-white">{value}</p>
            </div>
        </div>
    );

    return href ? <a href={href}>{content}</a> : content;
}

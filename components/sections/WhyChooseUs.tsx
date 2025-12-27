"use client";

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShieldCheck, TrendingUp, Leaf, Factory } from 'lucide-react';

const reasons = [
    {
        icon: ShieldCheck,
        title: "Trust & Reliability",
        description: "Decades of proven track record with government and enterprise clients.",
    },
    {
        icon: ShieldCheck, // Using duplicate icon as placeholder since 'Quality' is similar
        title: "Strict Quality Control",
        description: "Rigorous testing and DFT/thickness checks at every stage.",
    },
    {
        icon: Factory,
        title: "In-house Manufacturing",
        description: "End-to-end production capabilities ensuring timeline control.",
    },
    {
        icon: Leaf,
        title: "Sustainable Processes",
        description: "Efficient material usage and eco-friendly waste management.",
    },
    {
        icon: TrendingUp,
        title: "Continuous Improvement",
        description: "Adopting the latest fabrication technologies and methods.",
    },
];


export function WhyChooseUs() {
    return (
        <section className="py-12 md:py-20 bg-[#020617] relative overflow-hidden border-t border-white/5">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                <div className="w-full h-full bg-grid-white opacity-20"></div>
            </div>

            <div className="container-custom relative z-10">
                <SectionHeading
                    title="Why Industry Leaders Choose Us"
                    subtitle="We build more than just structures; we build enduring partnerships based on quality and trust."
                    light
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary/50 group-hover:text-white transition-all duration-300 shadow-xl">
                                <reason.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-white">{reason.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

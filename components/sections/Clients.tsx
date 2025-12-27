"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

const clients = [
    "Arvind Ltd",
    "Torrent Pharma",
    "HKRP Innovations",
    "TRIO Elevators",
    "IRIS Automation",
    "Ashmor",
    "OSCO RP",
    "IIMA",
    "ONGC", // Added for weight
    "Gujarat State Petronet" // Added for weight
];

export function Clients() {
    return (
        <section className="py-24 bg-[#020617] border-t border-white/5 overflow-hidden">
            <div className="container-custom text-center">
                <p className="text-gray-400 font-bold tracking-widest uppercase mb-10 text-sm">Trusted by Industry Leaders</p>

                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

                    {/* Scrolling Marquee */}
                    <div className="flex overflow-x-hidden">
                        <motion.div
                            className="flex gap-12 items-center whitespace-nowrap"
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        >
                            {[...clients, ...clients, ...clients].map((client, index) => (
                                <div key={index} className="flex items-center justify-center w-[250px] flex-none">
                                    {/* In a real scenario, use <Image> with logos. For now, using styled text placeholders */}
                                    <span className="text-2xl font-bold text-gray-300 hover:text-primary transition-colors cursor-default select-none whitespace-nowrap">
                                        {client}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

// Using placeholder images for demo
const images = [
    { src: "/Shed.png", category: "Industrial Sheds", size: "large" },
    { src: "/stylish-entrance.png", category: "Elevators & Entrances", size: "small" },
    { src: "/furniture1.png", category: "Furniture", size: "small" },
    { src: "/heavy-machinery.png", category: "Heavy Machinery", size: "medium" },
    { src: "/factory.png", category: "Factory Infrastructure", size: "medium" },
];

export function Gallery() {
    return (
        <section id="gallery" className="py-24 md:py-32 bg-[#020617] border-t border-white/5">
            <div className="container-custom">
                <SectionHeading
                    title="Project Gallery"
                    subtitle="A showcase of our engineering precision across various industrial sectors."
                    light
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                img.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''
                                }`}
                        >
                            {/* Background Image Placeholder */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${img.src})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-1">Project</p>
                                <h4 className="text-white text-xl font-bold">{img.category}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

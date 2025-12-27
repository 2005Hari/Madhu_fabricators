"use client";

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { ArrowRight, Armchair, Zap, Warehouse, Ruler, ArrowUpFromDot, Settings } from 'lucide-react';
import { ServiceModal } from '@/components/ui/ServiceModal';

const services = [
    {
        icon: Armchair,
        title: "MS / SS / Steel Furniture",
        description: "Durable and aesthetic furniture solutions for institutional and industrial use. Custom designed for ergonomic performance.",
        longDescription: "We manufacture high-grade Metal (MS) and Stainless Steel (SS) furniture tailored for durability and aesthetics. Our range includes ergonomic office desks, industrial lockers, heavy-duty storage racks, and specialized institutional furniture. Each piece is treated for corrosion resistance and finished with premium powder coating.",
        features: ["Rust-proof & corrosion-resistant", "Ergonomic designs", "Custom dimensions available", "Heavy-load bearing capacity"],
        image: "/furniture1.png"
    },
    {
        icon: Zap,
        title: "Electrical Panel Boards",
        description: "Precision-fabricated electrical and electronics panel boards designed for safety, accessibility, and durability.",
        longDescription: "Our electrical panels are engineered for safety and efficiency. We fabricate robust enclosures for distribution boards, control panels, and automation systems, adhering to strict IP protection standards. We use high-quality CRCA sheets and precision CNC bending for seamless construction.",
        features: ["IP65/IP54 compliant designs", "Modular & scalable", "Powder-coated for insulation", "High-grade steel construction"],
        image: "/factory.png"
    },
    {
        icon: Warehouse,
        title: "Industrial Sheds & Housing",
        description: "Heavy-duty parking sheds, generator houses, and industrial roofing structures built to withstand elements.",
        longDescription: "From large-scale factory sheds to compact generator housings, we deliver structural steel fabrication excellence. Our structures are designed to withstand harsh weather conditions, offering longevity and low maintenance. We handle everything from pillar fabrication to roofing installation.",
        features: ["Weather-resistant coatings", "High tensile steel strength", "Quick on-site assembly", "Customizable roofing options"],
        image: "/Shed.png"
    },
    {
        icon: Ruler,
        title: "Sheet Metal Fabrication",
        description: "High-precision sheet metal cutting, bending, and assembly for component manufacturing.",
        longDescription: "Utilizing advanced CNG Laser cutting and Hydraulic Press Brakes, we offer end-to-end sheet metal fabrication services. Whether it's complex enclosures, machine guards, or custom brackets, we ensure varying tolerances are met with absolute precision.",
        features: ["CNC Laser Cutting accuracy", "Complex bending capabilities", "Variety of metal grades", "Prototyping to mass production"],
        image: "/heavy-machinery.png"
    },
    {
        icon: ArrowUpFromDot,
        title: "Elevator Parts & Cabins",
        description: "Complete elevator cabin bodies and critical mechanical parts manufactured to strict safety standards.",
        longDescription: "We are a trusted supplier of elevator cabins and structural components. Our cabins range from utilitarian goods lift designs to premium passenger elevator aesthetics with mirror-finish SS. We also fabricate counterweight frames, brackets, and guide rails.",
        features: ["Premium SS Finishes", "Safety-standard compliant", "Customizable interiors", "Robust structural integrity"],
        image: "/stylish-entrance.png"
    },
    {
        icon: Settings,
        title: "Machinery Fabrication",
        description: "Custom fabrication for all types of machinery parts and support structures tailored to your specs.",
        longDescription: "Our machinery fabrication service caters to OEMs needing custom machine bases, frames, and operational parts. We work with heavy gauges and provide stress-relieving and surface treatment to ensure the components perform reliably under load.",
        features: ["Heavy gauge fabrication", "Precision alignment", "Vibration dampening designs", "Complete surface treatment"],
        image: "/heavy-machinery.png"
    },
];

export function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="services" className="py-24 md:py-32 bg-muted relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />

            <div className="container-custom relative z-10">
                <SectionHeading
                    title="Our Core Services"
                    subtitle="Comprehensive metal fabrication solutions tailored for industrial efficiency and strength."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="group relative bg-[#0F172A] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                            {/* Hover Gradient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <CardContent className="h-full flex flex-col pt-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <CardTitle className="mb-4 text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </CardTitle>

                                <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-base">
                                    {service.description}
                                </p>

                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors tracking-widest uppercase cursor-pointer"
                                >
                                    Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />
        </section>
    );
}

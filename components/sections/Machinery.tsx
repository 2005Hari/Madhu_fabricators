"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { Settings, Scissors, MoveVertical, Hammer, Gauge } from 'lucide-react';
import Image from 'next/image';

const machinery = [
    {
        name: "CNC Laser Cutting Machine",
        specs: "MS 12mm / SS 6mm",
        icon: Scissors // Placeholder
    },
    {
        name: "NC Hydraulic Press Brake",
        specs: "High Precision Bending",
        icon: MoveVertical // Placeholder
    },
    {
        name: "Hydraulic Cutting Machine",
        specs: "Heavy Duty Shearing",
        icon: Scissors // Placeholder
    },
    {
        name: "MIG Welding Machines",
        specs: "250A Industrial Grade",
        icon: Hammer // Zap/Welding icon substitute
    },
    {
        name: "Power Press",
        specs: "20 Ton / 30 Ton Capacity",
        icon: Gauge // Pressure/Force
    },
    {
        name: "Overhead Crane",
        specs: "3 Ton Lifting Capacity",
        icon: Settings // Crane/Hook
    },
];

export function Machinery() {
    return (
        <section id="machinery" className="py-24 md:py-32 bg-[#020617] border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* List Side */}
                    <div className="order-2 lg:order-1">
                        <SectionHeading
                            title="Infrastructure & Machinery"
                            subtitle="State-of-the-art manufacturing facility equipped with advanced machinery for precision fabrication."
                            alignment="left"
                            light
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {machinery.map((item, index) => (
                                <Card key={index} className="bg-[#0F172A] border border-white/5 rounded-lg hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-4 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-100 text-base">{item.name}</h4>
                                            <p className="text-sm text-gray-500 font-medium">{item.specs}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Rolling Machines Note */}
                        <div className="mt-8 p-6 bg-[#0F172A] rounded-lg border border-primary/20">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-secondary" /> Additional Capabilities
                            </h4>
                            <p className="text-gray-400">
                                We also house heavy-duty Rolling Machines and a complete tool room for maintenance and custom tooling requirements.
                            </p>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 h-full min-h-[400px] relative">
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 blur-sm" />
                        <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform -rotate-3 blur-sm" />
                        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl bg-[#0F172A] border border-white/10 group">
                            {/* Placeholder: Machinery Image */}
                            <div className="w-full h-full relative">
                                <Image
                                    src="/infrastructure.png"
                                    alt="Machinery"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-8 z-10">
                                <p className="text-white font-bold text-lg">Precision Engineering</p>
                                <p className="text-gray-400 text-sm">Our facility is designed for high-volume, high-precision output.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

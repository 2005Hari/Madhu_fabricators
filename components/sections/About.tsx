"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { BadgeCheck, Cog, Factory, Users } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { icon: Factory, label: "Years Experience", value: "38+" },
    { icon: Users, label: "Happy Clients", value: "1500+" },
    { icon: Cog, label: "Projects Completed", value: "5000+" },
    { icon: BadgeCheck, label: "Quality Checks", value: "100%" },
];

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-[#0B1120]">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div>
                        <SectionHeading
                            title="38+ Years of Fabrication Excellence"
                            subtitle="Pioneering manufacturer of MS / SS / Steel furniture and heavy industrial fabrication."
                            alignment="left"
                            light
                        />

                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Established with a vision to deliver engineering perfection, Madhu Fabricators has evolved into a premier name in the fabrication industry. We specialize in transforming raw metal into precision-engineered assets that power industries and institutions alike.
                            </p>
                            <p>
                                From heavy industrial sheds and intricate electrical panels to durable elevator parts and modular furniture, our expertise spans across diverse domains. We are proud to be the trusted partner for government bodies, major banks, educational institutes, and large-scale industrial units.
                            </p>
                            <p className="font-semibold text-white">
                                We don't just manufacture; we execute turnkey solutions with unwavering after-sales support.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                                        <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10 shadow-2xl bg-muted">
                            <Image
                                src="/about-image.png"
                                alt="Madhu Fabricators Shop Floor"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border-r-8 border-b-8 border-secondary/10 -z-0 rounded-br-3xl" />
                        <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-steel-light/30 -z-0 rounded-tl-3xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}

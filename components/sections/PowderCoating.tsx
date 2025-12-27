import { SectionHeading } from '@/components/ui/SectionHeading';
import { Layers, Droplets, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const steps = [
    {
        title: "Pre-treatment",
        desc: "Thorough removal of dust, oil, and rust to ensure perfect adhesion.",
        icon: Droplets,
        img: "/Pre-treatment.png"
    },
    {
        title: "Blast Room",
        desc: "Surface preparation in a dedicated blast room for optimal texture.",
        icon: Layers,
        img: "/Blast-Room.png"
    },
    {
        title: "Eco-friendly",
        desc: "Environmentally conscious process with minimal waste generation.",
        icon: ShieldCheck,
        img: "/EcoFriendly.png"
    }
];

const tests = ["DFT Meter Analysis", "Coating Thickness Gauge", "Cross Hatch Test", "Mandrel Bend Test"];

export function PowderCoating() {
    return (
        <section className="py-12 md:py-20 bg-[#0B1120] border-t border-white/5">
            <div className="container-custom">
                <SectionHeading
                    title="7-Tank Powder Coating Plant"
                    subtitle="Superior finish and corrosion resistance with our in-house powder coating facility."
                    light
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, i) => (
                        <div key={i} className="group bg-[#0F172A] rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg">
                            {/* Image Area */}
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={step.img}
                                    alt={step.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 text-white rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg">
                                    <step.icon className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
                            <p className="text-gray-400 mb-6 max-w-xl text-lg">
                                We don't just coat; we certify. Every batch undergoes rigorous testing to ensure it meets international durability standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                            {tests.map((test, index) => (
                                <div key={index} className="flex items-center gap-3 bg-[#1E293B] px-5 py-4 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="font-medium text-gray-200">{test}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

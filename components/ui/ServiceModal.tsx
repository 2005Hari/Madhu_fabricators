"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        longDescription: string;
        features: string[];
        image?: string;
        icon?: any;
    } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="bg-[#0F172A] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto flex flex-col md:flex-row">

                            {/* Close Button Mobile */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white md:hidden"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-full">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent md:bg-gradient-to-r z-10" />
                                <Image
                                    src={service.image || "/about-image.png"} // Fallback image
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-6 left-6 z-20 hidden md:block">
                                    <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center text-white shadow-lg">
                                        {service.icon && <service.icon className="w-6 h-6" />}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-3/5 p-6 md:p-10 text-left bg-[#0F172A]">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="md:hidden w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        {service.icon && <service.icon className="w-6 h-6" />}
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="hidden md:block p-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                    {service.longDescription}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Key Features</h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-400">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4 border-t border-white/5 pt-6 mt-auto">
                                    <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto">
                                        Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                    <Button variant="outline" onClick={onClose} className="w-full md:w-auto">
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

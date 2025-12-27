"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Machinery', href: '#machinery' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#020617]/90 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="container-custom flex h-20 items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/90 rounded-md p-1">
                        <Image
                            src="/logo.png"
                            alt="Madhu Fabricators"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Hiding text since logo has text, but keeping for SEO or if logo doesn't load well. 
                        Actually, let's keep it but make it smaller or hidden on mobile if needed.
                        Given the logo has huge text, maybe we hide the text here? 
                        Let's keep "Madhu Fabricators" text as it's good for standard headers.
                    */}
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight">MADHU</span>
                        <span className="text-xs md:text-sm font-semibold text-secondary tracking-[0.2em] uppercase">Fabricators</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-secondary decoration-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex flex-col items-end mr-2">
                        <span className="text-xs text-steel">Call for support</span>
                        <a href="tel:+919099963830" className="flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors">
                            <Phone className="w-3 h-3" /> +91 90999 63830
                        </a>
                    </div>
                    <Button variant="secondary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get a Quote
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container-custom py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between p-3 text-steel hover:bg-gray-50 rounded-md hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="font-medium">{link.name}</span>
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                </Link>
                            ))}
                            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                                <a href="tel:+919099963830" className="flex items-center justify-center gap-2 text-primary font-semibold p-2 border border-primary/20 rounded-md">
                                    <Phone className="w-4 h-4" /> Call: +91 90999 63830
                                </a>
                                <Button className="w-full" variant="secondary" onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 bg-white/10 p-2 rounded-lg w-fit backdrop-blur-sm">
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Madhu Fabricators Model"
                                    fill
                                    className="object-contain" // Keeping original colors maybe? Or brightness-0 invert if we want white. 
                                // The logo has colors. Let's keep original colors on a white bg tile or invert it?
                                // The user said "premium". Usually white logo on dark looks best.
                                // Since the logo is Red/Blue/White BG... if I just put it there, the White BG box will show.
                                // I'll make the container white/10 but let's assume the logo has a whitespace box.
                                // A nice rounded white box for the logo might look clean.
                                // Let's try a white background circle/square for the logo.
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">MADHU FABRICATORS</span>
                        </div>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            Pioneering manufacturer of MS/SS furniture, industrial sheds, and electrical panels with 38+ years of engineering excellence.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Machinery', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Industrial Sheds',
                                'MS / SS Furniture',
                                'Electrical Panels',
                                'Sheet Metal Fabrication',
                                'Elevator Parts',
                                'Powder Coating'
                            ].map((item) => (
                                <li key={item} className="text-white/70">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <span className="text-white/70">
                                    Plot No. 1-B, Near Arvind Forest, Village Karoli, Taluka Kalol, Gandhinagar – 382721
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+919099963830" className="text-white/70 hover:text-white transition-colors">+91 90999 63830 (Technical)</a>
                                    <a href="tel:+919099963821" className="text-white/70 hover:text-white transition-colors">+91 90999 63821 (Official)</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:madhufabricators91@gmail.com" className="text-white/70 hover:text-white transition-colors">
                                    madhufabricators91@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© {currentYear} Madhu Fabricators. All rights reserved.</p>
                    <p>Designed for Industrial Excellence.</p>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React from 'react';

export function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, phone, email, service, message } = formData;

        // Construct Message
        const text = `*New Enquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;

        // WhatsApp URL
        const whatsappUrl = `https://wa.me/919099963830?text=${text}`;

        // Mailto URL
        const mailtoUrl = `mailto:madhufabricators91@gmail.com?subject=New Enquiry from ${name}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0AMessage: ${message}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Open Mail Client (Small delay to allow tab opening)
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 500);
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#020617] relative border-t border-white/5">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info & Map */}
                    <div>
                        <SectionHeading
                            title="Get In Touch"
                            subtitle="Ready to start your project? Contact us for a consultation or quote."
                            alignment="left"
                            light
                        />

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4 group">
                                <div className="w-14 h-14 bg-[#1E293B] border border-white/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-2">Our Facility</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Plot No. 1-B, Near Arvind Forest,<br />
                                        Village Karoli, Taluka Kalol,<br />
                                        Gandhinagar – 382721
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-14 h-14 bg-[#1E293B] border border-white/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-2">Phone</h4>
                                    <p className="text-gray-400">Hiren Panchal: <a href="tel:+919099963830" className="hover:text-primary transition-colors">+91 90999 63830</a> (Technical)</p>
                                    <p className="text-gray-400">Fulchand Panchal: <a href="tel:+919099963821" className="hover:text-primary transition-colors">+91 90999 63821</a> (Official)</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-14 h-14 bg-[#1E293B] border border-white/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-2">Email</h4>
                                    <p className="text-gray-400"><a href="mailto:madhufabricators91@gmail.com" className="hover:text-primary transition-colors">madhufabricators91@gmail.com</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-[300px] bg-[#1E293B] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.539828551065!2d72.483950!3d23.232450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b7455555555%3A0x1234567890abcdef!2sMadhu%20Fabricators!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#0F172A] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Request a Quote</h3>
                        <form onSubmit={handleSendMessage} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all" placeholder="+91 98765 43210" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all" placeholder="john@company.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Interested Service</label>
                                <select id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-white/5 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer">
                                    <option value="" className="bg-[#1E293B]">Select a Service</option>
                                    <option value="MS / SS Furniture" className="bg-[#1E293B]">MS / SS Furniture</option>
                                    <option value="Industrial Sheds" className="bg-[#1E293B]">Industrial Sheds</option>
                                    <option value="Electrical Panels" className="bg-[#1E293B]">Electrical Panels</option>
                                    <option value="Elevator Parts" className="bg-[#1E293B]">Elevator Parts</option>
                                    <option value="General Fabrication" className="bg-[#1E293B]">General Fabrication</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none" placeholder="Tell us about your project requirements..." required />
                            </div>

                            <Button type="submit" size="lg" className="w-full py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                Send Request
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

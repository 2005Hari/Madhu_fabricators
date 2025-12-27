import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Machinery } from "@/components/sections/Machinery";
import { PowderCoating } from "@/components/sections/PowderCoating";
import { Clients } from "@/components/sections/Clients";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Machinery />
      <PowderCoating />
      <Clients />
      <Gallery />
      <Contact />

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919099963830"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </main>
  );
}

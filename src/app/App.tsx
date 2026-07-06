import { Nav } from "@/app/components/sections/Nav";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Services } from "@/app/components/sections/Services";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

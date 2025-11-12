import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import KitCategories from "@/components/KitCategories";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ForWho />
      <KitCategories />
      <Benefits />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

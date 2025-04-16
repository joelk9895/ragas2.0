import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WhatsComingNext from "./components/WhatsComingNext";
import OpenSource from "./components/OpenSource";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Metrics />
        <Features />
        <WhatsComingNext />
        <OpenSource />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

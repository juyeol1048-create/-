import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useStorage } from '../lib/storage';

export default function Home() {
  const { settings } = useStorage();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SEO 
        title={settings.title}
        description={settings.description}
        keywords={settings.keywords}
      />
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

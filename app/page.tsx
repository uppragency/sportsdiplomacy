import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Media from '@/components/Media';
import Sponsors from '@/components/Sponsors';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="continut">
        <Hero />
        <About />
        <Speakers />
        <Media />
        <Sponsors />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Gallery from '@/components/Gallery';
import Media from '@/components/Media';
import Institutions from '@/components/Institutions';
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
        <Gallery />
        <Media />
        <Institutions />
        <Sponsors />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

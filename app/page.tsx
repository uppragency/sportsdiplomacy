import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Program from '@/components/Program';
import Speakers from '@/components/Speakers';
import Gallery from '@/components/Gallery';
import Media from '@/components/Media';
import Editions from '@/components/Editions';
import Institutions from '@/components/Institutions';
import Sponsors from '@/components/Sponsors';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// Notă: ParticipationCard (cardul digital "Am participat") e scos temporar din pagină —
// designul actual nu arăta bine, trebuie regândit un sistem mai bun. Componenta a rămas
// în components/ParticipationCard.tsx, gata de reintrodus după ce e refăcută.

export default function Home() {
  return (
    <>
      <Header />
      <main id="continut">
        <Hero />
        <About />
        <Program />
        <Speakers />
        <Gallery />
        <Media />
        <Editions />
        <Institutions />
        <Sponsors />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

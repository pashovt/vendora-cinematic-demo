import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Locations from './components/Locations.jsx';
import ServiceScope from './components/ServiceScope.jsx';
import Process from './components/Process.jsx';
import Faq from './components/Faq.jsx';
import Enquiry from './components/Enquiry.jsx';
import Footer from './components/Footer.jsx';
import CtaBand from './components/CtaBand.jsx';
import Commitments from './components/Commitments.jsx';
import Support from './components/Support.jsx';
import Proof from './components/Proof.jsx';
import { useReveals } from './hooks/useReveals.js';
import { useScrubEffects } from './hooks/useScrubEffects.js';

export default function App() {
  // Lets a location CTA pre-select the site type in the enquiry form.
  const [preferredSiteType, setPreferredSiteType] = useState('');
  useReveals();
  useScrubEffects();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Benefits />
        <Locations onChooseSiteType={setPreferredSiteType} />
        <Commitments />
        <ServiceScope />
        <Process />
        <Support />
        <Proof />
        <CtaBand />
        <Faq />
        <Enquiry preferredSiteType={preferredSiteType} />
      </main>
      <Footer />
    </>
  );
}

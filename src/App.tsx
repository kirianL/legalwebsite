import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { KeyTopicsSection } from './components/KeyTopicsSection';
import { VideosAndFaqSection } from './components/VideosAndFaqSection';
import { PartnersMapSection } from './components/PartnersMapSection';
import { LatestNewsSection } from './components/LatestNewsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <KeyTopicsSection />
        <VideosAndFaqSection />
        <PartnersMapSection />
        <LatestNewsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;

import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Stack from './components/Stack';
import Projetos from './components/Projetos';
import Processo from './components/Processo';
import CTA from './components/CTA';
import Footer from './components/Footer';

export function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#050807' }}>
      <Nav />
      <Hero />
      <Sobre />
      <Stack />
      <Projetos />
      <Processo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

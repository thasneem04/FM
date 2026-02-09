import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Stats from '../components/Stats';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Stats />
      <Reviews />
      <CTA />
      <Enquiry />
      <Footer />
    </>
  );
};

export default Home;

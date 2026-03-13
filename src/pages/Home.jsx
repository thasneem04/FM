import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SFMS from '../components/SFMS';
import OdooERP from '../components/OdooERP';
import WhyChooseUs from '../components/WhyChooseUs';
import SupportingServices from '../components/SupportingServices';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <SFMS />
      <OdooERP />
      <Process />
      <WhyChooseUs />
      <SupportingServices />
      <CTA />
      <Enquiry />
      <Footer />
    </>
  );
};

export default Home;

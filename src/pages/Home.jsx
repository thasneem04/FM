import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SFMS from '../components/SFMS';
import OdooERP from '../components/OdooERP';
import DigitalMarketing from '../components/DigitalMarketing';
import AiSolutions from '../components/AiSolutions';
import AiAutomation from '../components/AiAutomation';
import ErpSolutions from '../components/ErpSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import SupportingServices from '../components/SupportingServices';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';

const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <DigitalMarketing />
      <AiSolutions />
      <AiAutomation />
      <SFMS />
      <ErpSolutions />
      <OdooERP />
      <Process />
      <WhyChooseUs />
      <SupportingServices />
      <CTA onStartClick={() => setShowEnquiry(true)} />
      {showEnquiry && <Enquiry />}
      <Footer />
    </>
  );
};

export default Home;

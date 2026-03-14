import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BusinessWebsites from '../components/BusinessWebsites';
import SFMS from '../components/SFMS';
import OdooERP from '../components/OdooERP';
import DigitalMarketing from '../components/DigitalMarketing';
import SocialMediaManagement from '../components/SocialMediaManagement';
import Branding from '../components/Branding';
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
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BusinessWebsites />
      <DigitalMarketing />
      <SocialMediaManagement />
      <Branding />
      <AiSolutions />
      <AiAutomation />
      <SFMS />
      <ErpSolutions />
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

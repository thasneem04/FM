import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collaborate from './pages/Collaborate';
import ScrollToTop from './components/ScrollToTop';
import PremiumCursor from "./PremiumCursor";


function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.get('intro') === '1';
    const skipIntro = params.get('intro') === '0';

    if (forceIntro) {
      window.sessionStorage.removeItem('intro_seen');
    }

    if (skipIntro) {
      setIntroDone(true);
    }
  }, []);

  return (
    <Router>
      <PremiumCursor />
      <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#1A1A1A' }}>
        
        {!introDone && (
          <IntroOverlay
            onComplete={() => {
              setIntroDone(true);
            }}
          />
        )}

        {introDone && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="page-offset"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collaborate" element={<Collaborate />} />
            </Routes>
          </motion.main>
        )}
        {introDone && <ScrollToTop />}
      </div>
    </Router>
  );
}


export default App;

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
      <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#1A1A1A', width: '100vw', overflowX: 'hidden' }}>
        
        <AnimatePresence mode="wait">
          {!introDone && (
            <IntroOverlay
              key="intro"
              onComplete={() => {
                setIntroDone(true);
              }}
            />
          )}
        </AnimatePresence>

        {introDone && (
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="page-offset"
            style={{ width: '100%', maxWidth: '100vw' }}
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

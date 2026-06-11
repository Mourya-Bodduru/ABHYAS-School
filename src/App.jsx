import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Wrapper for AnimatePresence to work with routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* We want Navigation on all pages except Intro potentially, but let's conditionally render it in the components or here */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;

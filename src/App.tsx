import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import Products from './components/Products';
import { initGA, logPageView, initGoatCounter, logGoatCounterPageView } from './utils/analytics';

// Replace this with your actual Google Analytics tracking ID
const GA_TRACKING_ID = 'G-YQPJHWZ2J0';

// Replace this with your GoatCounter code
const GOAT_COUNTER_CODE = 'bF6rMoSEbwy7a7j';

function App() {
  useEffect(() => {
    initGA(GA_TRACKING_ID);
    initGoatCounter(GOAT_COUNTER_CODE);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
    logGoatCounterPageView();
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="container mx-auto px-4 py-8">
            <Hero />
            <About />
            <Services />
            <Blog />
            <Products />
            <Contact />
          </main>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
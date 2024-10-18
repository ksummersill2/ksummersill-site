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
import { initGA, logPageView } from './utils/analytics';

// Replace this with your actual Google Analytics tracking ID
const GA_TRACKING_ID = 'G-H8QL83DN1Y';

function App() {
  useEffect(() => {
    initGA(GA_TRACKING_ID);
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
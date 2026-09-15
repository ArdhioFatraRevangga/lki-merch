import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact'; // Import halaman Contact
import InstagramFeed from './components/InstagramFeed';
import Services from './components/Services';
import Footer from './components/Footer';

// Halaman Home
function HomePage() {
  return (
    <>
      <Hero />
      <InstagramFeed />
      <Services />
    </>
  );
}

// Halaman About
function AboutPage() {
  return (
    <>
      <About />
      <Services />
    </>
  );
}

// Halaman Contact Us
function ContactPage() {
  return (
    <>
      <Contact />
      <Services />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-black font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Route Contact */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
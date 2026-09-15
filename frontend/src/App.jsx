import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Services from './components/Services';
import Footer from './components/Footer';

// 1. Bungkus komponen untuk Halaman Home
function HomePage() {
  return (
    <>
      <Hero />
      <InstagramFeed />
      <Services />
    </>
  );
}

// 2. Bungkus komponen untuk Halaman About
function AboutPage() {
  return (
    <>
      <About />
      <Services />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-black font-sans">
        
        {/* Navbar akan selalu muncul di halaman apa pun */}
        <Navbar />

        {/* Area ini yang akan bergonta-ganti sesuai URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        {/* Footer (jika ada) akan selalu muncul di bawah */}
        {/* <Footer /> */} 
        
      </div>
    </Router>
  );
}

export default App;
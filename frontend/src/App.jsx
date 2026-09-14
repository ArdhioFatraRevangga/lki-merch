import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramFeed from './components/InstagramFeed';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <Navbar />
      <Hero />
      <InstagramFeed />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
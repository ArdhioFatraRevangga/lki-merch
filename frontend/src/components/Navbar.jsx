export default function Navbar() {
  return (
    <div>
      {/* TopBar Hitam */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider flex items-center gap-2">
          <span className="bg-white text-black px-2 py-0.5 rounded font-black italic">LK</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:text-gray-400">IG</a>
          <a href="#" className="hover:text-gray-400">WA</a>
        </div>
      </header>

      {/* Navigation Bar Putih */}
      <nav className="border-b border-gray-200 py-3 px-8 flex justify-end gap-8 text-sm tracking-wide font-medium">
        <a href="#home" className="hover:text-gray-500 underline font-semibold">Home</a>
        <a href="#about" className="hover:text-gray-500 text-gray-600">About</a>
        <a href="#contact" className="hover:text-gray-500 text-gray-600">Contact Us</a>
      </nav>
    </div>
  );
}
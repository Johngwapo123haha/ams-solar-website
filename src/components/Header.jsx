export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">☀️</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">SolarTech</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#benefits" className="text-gray-600 hover:text-yellow-500 transition">Benefits</Link>
          <Link href="#products" className="text-gray-600 hover:text-yellow-500 transition">Products</Link>
          <Link href="#projects" className="text-gray-600 hover:text-yellow-500 transition">Projects</Link>
          <Link href="#contact" className="text-gray-600 hover:text-yellow-500 transition">Contact</Link>
        </div>

        <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition font-semibold">
          Get Quote
        </button>
      </nav>
    </header>
  );
}
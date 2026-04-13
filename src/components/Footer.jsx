export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-bold mb-4">SolarTech</h4>
          <p className="text-gray-400">Leading solar energy solutions</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Products</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Solar Panels</a></li>
            <li><a href="#" className="hover:text-white">Battery Storage</a></li>
            <li><a href="#" className="hover:text-white">Inverters</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2026 SolarTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { Menu, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-stone-900/95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Pizza className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-semibold">Dom Pizzaiolo</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-orange-500 px-3 py-2 transition-colors">Home</a>
              <a href="#menu" className="hover:text-orange-500 px-3 py-2 transition-colors">Menu</a>
              <a href="#about" className="hover:text-orange-500 px-3 py-2 transition-colors">Sobre</a>
              <a href="#contact" className="hover:text-orange-500 px-3 py-2 transition-colors">Contato</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-900">
            <a href="#home" className="block px-3 py-2 hover:text-orange-500">Home</a>
            <a href="#menu" className="block px-3 py-2 hover:text-orange-500">Menu</a>
            <a href="#about" className="block px-3 py-2 hover:text-orange-500">Sobre</a>
            <a href="#contact" className="block px-3 py-2 hover:text-orange-500">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
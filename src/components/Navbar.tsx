import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Service Provide', path: '/services' },
    { name: 'Templates', path: '/templates' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full lg:w-[90%] lg:mx-auto lg:rounded-lg lg:mt-[10px] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo with fade-in animation */}
          <div className="flex items-center animate-fade-in">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Webeez Logo" className="w-50 h-10 transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:translate-y-[-2px] ${
                  isActive(item.path)
                    ? 'text-webeez-secondary border-b-2 border-webeez-secondary'
                    : 'text-webeez-primary hover:text-webeez-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/get-started">
              <Button className="bg-webeez-secondary hover:bg-webeez-accent1 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-webeez-primary hover:text-webeez-secondary p-2 transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation with slide-in animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 transform ${
                  isActive(item.path)
                    ? 'text-webeez-secondary bg-gray-100 translate-x-0'
                    : 'text-webeez-primary hover:text-webeez-secondary hover:bg-gray-50 translate-x-[-10px] hover:translate-x-0'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4"
            >
              <Button className="w-full bg-webeez-secondary hover:bg-webeez-accent1 text-white transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
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
    { name: 'About Us', path: '/about' },
    { name: 'Service Provide', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Templates', path: '/templates' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full lg:w-[90%] lg:mx-auto lg:rounded-lg lg:mt-[10px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Webeez Logo" className="w-50 h-10" />
              {/* <span className="text-2xl font-heading font-bold text-webeez-primary">
                Webeez
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-webeez-secondary border-b-2 border-webeez-secondary'
                    : 'text-webeez-primary hover:text-webeez-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/get-started">
              <Button className="bg-webeez-secondary hover:bg-webeez-accent1 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-webeez-primary hover:text-webeez-secondary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-webeez-secondary bg-gray-100'
                      : 'text-webeez-primary hover:text-webeez-secondary hover:bg-gray-50'
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
                <Button className="w-full bg-webeez-secondary hover:bg-webeez-accent1 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
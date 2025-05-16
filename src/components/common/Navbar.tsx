import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin, Home, UtensilsCrossed, Hotel, Building, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { items } = useCart();
  
  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/restaurants', label: 'Restaurants', icon: <UtensilsCrossed size={18} /> },
    { to: '/hotels', label: 'Hotels', icon: <Hotel size={18} /> },
    { to: '/places', label: 'Places to Visit', icon: <MapPin size={18} /> },
    { to: '/tours', label: 'Tour Packages', icon: <MapPin size={18} /> },
    { to: '/rents', label: 'Rents', icon: <Building size={18} /> },
    { to: '/contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold text-primary-700">Kishtwar</span>
          <span className="text-2xl font-display font-bold text-accent-500">Tourism</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-700 font-semibold' 
                    : `${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`
                }`
              }
            >
              <span className="flex items-center gap-1">
                {link.icon}
                {link.label}
              </span>
            </NavLink>
          ))}

          {items.length > 0 && (
            <Link 
              to="/checkout" 
              className="ml-2 p-2 bg-primary-100 rounded-full relative text-primary-700"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-white p-4 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}

            {items.length > 0 && (
              <Link 
                to="/checkout" 
                className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 text-accent-700 bg-accent-100"
              >
                <ShoppingCart size={18} />
                Cart ({items.length})
              </Link>
            )}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Cart from '../components/restaurant/Cart';
import { useCart } from '../context/CartContext';

const Layout: React.FC = () => {
  const location = useLocation();
  const { items } = useCart();
  const showCart = items.length > 0 && location.pathname.includes('/restaurants');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {showCart && <Cart />}
      <Footer />
    </div>
  );
};

export default Layout;
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
      {showCart && <Cart />}
      <Footer />
    </div>
  );
};

export default Layout;
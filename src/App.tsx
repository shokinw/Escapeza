// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import Layout from './layouts/Layout';

// Pages
import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import HotelsPage from './pages/HotelsPage';
import HotelDetailPage from './pages/HotelDetailPage';
import PlacesPage from './pages/PlacesPage';
import ToursPage from './pages/ToursPage';
import RentsPage from './pages/RentsPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';

// Context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="restaurants" element={<RestaurantsPage />} />
            <Route path="restaurants/:id" element={<RestaurantDetailPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="hotels/:id" element={<HotelDetailPage />} />
            <Route path="places" element={<PlacesPage />} />
            <Route path="tours" element={<ToursPage />} />
            <Route path="rents" element={<RentsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </CartProvider>
  );
}

export default App;
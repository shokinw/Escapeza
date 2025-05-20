import React from 'react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="/Escapeza/assets/herokishtwar.jpg"
          alt="Escapeza Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Welcome to Escapeza
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Discover the hidden gem of Kashmir
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import SectionHeading from '../components/common/SectionHeading';
import { Star, Search, UtensilsCrossed } from 'lucide-react';

const RestaurantsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCuisine, setFilterCuisine] = useState('');

  // Get unique cuisines
  const cuisines = [...new Set(restaurants.flatMap(restaurant => 
    restaurant.cuisine.split(', ')
  ))];

  // Filter restaurants based on search and cuisine
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = filterCuisine === '' || restaurant.cuisine.includes(filterCuisine);
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Restaurants in Kishtwar
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the best restaurants and taste local cuisine
          </motion.p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 shadow-inner">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              className="select"
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
            >
              <option value="">All Cuisines</option>
              {cuisines.map((cuisine, index) => (
                <option key={index} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Restaurants List */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeading
            title="Explore Restaurants"
            subtitle="Click on a restaurant to view its menu and place an order"
          />
          
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  className="card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/restaurants/${restaurant.id}`}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{restaurant.name}</h3>
                        <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          <Star size={16} className="fill-current mr-1" />
                          {restaurant.rating}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">{restaurant.priceRange} • {restaurant.openingHours}</span>
                        <button className="text-primary-600 font-medium flex items-center">
                          <UtensilsCrossed size={16} className="mr-1" />
                          View Menu
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No restaurants found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RestaurantsPage;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { restaurants, menuCategories } from '../data/restaurants';
import { Star, MapPin, Phone, Clock, ChevronLeft, PlusCircle, Filter } from 'lucide-react';
import { useCart, CartItem } from '../context/CartContext';

const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const menuItems = menuCategories[id || ''] || [];
  const { addItem } = useCart();
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showVeg, setShowVeg] = useState<boolean>(false);

  if (!restaurant) {
    return (
      <div className="container-custom text-center py-20 mt-16">
        <h2 className="text-2xl font-bold mb-4">Restaurant not found</h2>
        <Link to="/restaurants" className="btn-primary">
          Back to Restaurants
        </Link>
      </div>
    );
  }

  const filteredMenuItems = menuItems.map(category => {
    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return { ...category, items: [] };
    }
    
    const filteredItems = category.items.filter(item => {
      if (showVeg) {
        return item.vegetarian;
      }
      return true;
    });
    
    return { ...category, items: filteredItems };
  });

  const handleAddToCart = (menuItem: any) => {
    const cartItem: CartItem = {
      id: `${restaurant.id}-${menuItem.id}`,
      menuItem,
      quantity: 1,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name
    };
    
    addItem(cartItem);
  };

  return (
    <div className="pt-16">
      {/* Restaurant Banner */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom relative h-full flex flex-col justify-end pb-8">
          <Link to="/restaurants" className="text-white mb-4 inline-flex items-center">
            <ChevronLeft size={20} />
            <span>Back to Restaurants</span>
          </Link>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-2xl">
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {restaurant.name}
            </motion.h1>
            
            <motion.div 
              className="flex items-center gap-2 text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>{restaurant.cuisine}</span>
              <span className="px-2">•</span>
              <span>{restaurant.priceRange}</span>
              <span className="flex items-center ml-2 bg-green-500 text-white px-2 py-0.5 rounded text-sm">
                <Star size={14} className="fill-current mr-1" />
                {restaurant.rating}
              </span>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {restaurant.address}
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                {restaurant.contactNumber}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {restaurant.openingHours}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Restaurant Description */}
      <div className="bg-white py-6 shadow-md">
        <div className="container-custom">
          <p className="text-gray-700">{restaurant.description}</p>
        </div>
      </div>
      
      {/* Menu Section */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Menu Categories</h2>
              
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="vegOnly" 
                    checked={showVeg}
                    onChange={() => setShowVeg(!showVeg)}
                    className="h-4 w-4 text-primary-600"
                  />
                  <label htmlFor="vegOnly" className="flex items-center">
                    <div className="h-4 w-4 bg-green-500 mr-1"></div>
                    Vegetarian Only
                  </label>
                </div>
              </div>
              
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeCategory === 'all' ? 'bg-primary-100 text-primary-700 font-medium' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory('all')}
                  >
                    All Items
                  </button>
                </li>
                {menuItems.map(category => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === category.id ? 'bg-primary-100 text-primary-700 font-medium' : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="md:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Menu</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter size={16} />
                <span>
                  {showVeg ? 'Showing vegetarian items only' : 'Showing all items'}
                </span>
              </div>
            </div>
            
            {filteredMenuItems.map(category => (
              category.items.length > 0 && (
                <motion.div 
                  key={category.id}
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
                    {category.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {category.items.map(item => (
                      <motion.div 
                        key={item.id}
                        className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 relative"
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        {item.vegetarian && (
                          <div className="absolute top-2 right-2 h-4 w-4 bg-green-500 rounded-sm" title="Vegetarian"></div>
                        )}
                        
                        <div className="sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-semibold">{item.name}</h4>
                            <span className="font-medium">₹{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm mt-1 mb-3">{item.description}</p>
                          
                          <button 
                            className="flex items-center text-primary-600 hover:text-primary-800"
                            onClick={() => handleAddToCart(item)}
                          >
                            <PlusCircle size={18} className="mr-1" />
                            Add to Cart
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
            
            {filteredMenuItems.every(category => category.items.length === 0) && (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 text-lg">
                  No menu items found for the selected filters.
                </p>
                <button 
                  className="mt-4 btn-outline"
                  onClick={() => {
                    setActiveCategory('all');
                    setShowVeg(false);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
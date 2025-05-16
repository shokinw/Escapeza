import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hotels } from '../data/hotels';
import SectionHeading from '../components/common/SectionHeading';
import { Star, Search, MapPin, User } from 'lucide-react';

const HotelsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = hotel.pricePerNight >= priceRange[0] && hotel.pricePerNight <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  const minPrice = Math.min(...hotels.map(hotel => hotel.pricePerNight));
  const maxPrice = Math.max(...hotels.map(hotel => hotel.pricePerNight));

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === 'minPrice') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hotels in Kishtwar
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find the perfect accommodation for your stay
          </motion.p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 shadow-inner">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search hotels by name or location..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:w-1/3">
              <div>
                <label htmlFor="minPrice" className="label">Min Price (₹)</label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  className="input"
                  min={minPrice}
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={handlePriceChange}
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="label">Max Price (₹)</label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  className="input"
                  min={priceRange[0]}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels List */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeading
            title="Explore Hotels"
            subtitle="Click on a hotel to view details and book a room"
          />
          
          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredHotels.map((hotel) => (
                <motion.div
                  key={hotel.id}
                  className="card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/hotels/${hotel.id}`}>
                    <div className="h-56 overflow-hidden">
                      <img
                        src={hotel.images[0]}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{hotel.name}</h3>
                        <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          <Star size={16} className="fill-current mr-1" />
                          {hotel.rating}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={16} className="mr-1" />
                        <span>{hotel.address}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600 text-sm">
                          <User size={14} className="mr-1" />
                          <span>
                            {Math.min(...hotel.rooms.map(room => room.capacity))} - {Math.max(...hotel.rooms.map(room => room.capacity))} Guests
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {hotel.rooms.length} room type{hotel.rooms.length > 1 ? 's' : ''}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-2xl font-bold text-primary-600">₹{hotel.pricePerNight}</span>
                          <span className="text-gray-500 text-sm">/night</span>
                        </div>
                        <button className="btn-primary">View Details</button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No hotels found. Try adjusting your filters.</p>
              <button 
                className="mt-4 btn-outline"
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([minPrice, maxPrice]);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;
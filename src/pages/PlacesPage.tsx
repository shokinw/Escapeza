import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { places } from '../data/places';
import SectionHeading from '../components/common/SectionHeading';
import { Search, Map as MapIcon, Clock, Calendar } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const PlacesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  useEffect(() => {
    // Set map as loaded after a small delay to ensure components are mounted
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [...new Set(places.map(place => place.category))];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          place.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !category || place.category === category;
    return matchesSearch && matchesCategory;
  });

  const handlePlaceClick = (id: string) => {
    setSelectedPlace(id === selectedPlace ? null : id);
    
    // Scroll to map on mobile
    if (window.innerWidth < 768) {
      const mapElement = document.getElementById('map-container');
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Places to Visit in Kishtwar
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the scenic beauty and rich culture of Kishtwar
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
                placeholder="Search places..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Places List */}
            <div className="lg:col-span-1">
              <SectionHeading
                title="Discover Places"
                subtitle="Click on a place to view its location on the map"
              />
              
              {filteredPlaces.length > 0 ? (
                <div className="space-y-6">
                  {filteredPlaces.map((place) => (
                    <motion.div
                      key={place.id}
                      className={`card cursor-pointer ${selectedPlace === place.id ? 'ring-2 ring-primary-500' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      onClick={() => handlePlaceClick(place.id)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                        <div className="text-gray-600 text-sm flex items-center mb-2">
                          <MapIcon size={16} className="mr-1" />
                          {place.distance}
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-gray-600 text-sm flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {place.bestTimeToVisit}
                          </div>
                          <div className="text-gray-600 text-sm flex items-center">
                            <Clock size={16} className="mr-1" />
                            {place.duration}
                          </div>
                        </div>
                        <p className="text-gray-600 line-clamp-3">{place.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No places found. Try adjusting your filters.</p>
                  <button 
                    className="mt-4 btn-outline"
                    onClick={() => {
                      setSearchTerm('');
                      setCategory('');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Map */}
            <div className="lg:col-span-2" id="map-container">
              <SectionHeading
                title="Interactive Map"
                subtitle="Explore the locations of tourist spots in Kishtwar"
              />
              
              <div className="h-[600px] rounded-lg overflow-hidden shadow-md">
                {mapLoaded && (
                  <MapContainer 
                    center={[33.3123, 75.7651]} 
                    zoom={10} 
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredPlaces.map((place) => (
                      <Marker 
                        key={place.id}
                        position={[place.location.lat, place.location.lng]}
                      >
                        <Popup>
                          <div className="text-center">
                            <h3 className="font-bold">{place.name}</h3>
                            <img 
                              src={place.image} 
                              alt={place.name} 
                              className="w-full h-32 object-cover my-2 rounded"
                            />
                            <p className="text-sm">{place.description.substring(0, 100)}...</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
              </div>
              
              {selectedPlace && (
                <motion.div
                  className="mt-6 bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const place = places.find(p => p.id === selectedPlace);
                    return place ? (
                      <>
                        <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                        <p className="text-gray-600 mb-4">{place.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500">Distance</h4>
                            <p>{place.distance}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500">Best Time to Visit</h4>
                            <p>{place.bestTimeToVisit}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500">Duration</h4>
                            <p>{place.duration}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500">Category</h4>
                            <p>{place.category}</p>
                          </div>
                        </div>
                      </>
                    ) : null;
                  })()}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacesPage;
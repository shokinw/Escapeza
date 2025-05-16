import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { rentProperties } from '../data/rents';
import SectionHeading from '../components/common/SectionHeading';
import { Search, Home, Square as SquareFeet, Bed, Bath, Phone, Mail, ChevronLeft, ChevronRight, Check, Users } from 'lucide-react';

const RentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [bedrooms, setBedrooms] = useState<number | ''>('');
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    moveInDate: ''
  });
  const [messageSubmitted, setMessageSubmitted] = useState<boolean>(false);

  const lowestPrice = Math.min(...rentProperties.map(prop => prop.price));
  const highestPrice = Math.max(...rentProperties.map(prop => prop.price));

  const filteredProperties = rentProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
    const matchesBedrooms = bedrooms === '' || property.bedrooms === bedrooms;
    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === 'minPrice') {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleNextImage = () => {
    if (!selectedProperty) return;
    const property = rentProperties.find(p => p.id === selectedProperty);
    if (!property) return;
    
    setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    if (!selectedProperty) return;
    const property = rentProperties.find(p => p.id === selectedProperty);
    if (!property) return;
    
    setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setMessageSubmitted(true);
    }, 1000);
  };

  const closePropertyDetails = () => {
    setSelectedProperty(null);
    setActiveImageIndex(0);
    setShowContactForm(false);
    setMessageSubmitted(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Home Rentals in Kishtwar
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find comfortable homes for your stay
          </motion.p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 shadow-inner">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search rentals..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:w-auto w-full">
              <div>
                <label htmlFor="minPrice" className="label">Min Price (₹)</label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  className="input"
                  min={lowestPrice}
                  max={maxPrice}
                  value={minPrice}
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
                  min={minPrice}
                  max={highestPrice}
                  value={maxPrice}
                  onChange={handlePriceChange}
                />
              </div>
              <div>
                <label htmlFor="bedrooms" className="label">Bedrooms</label>
                <select
                  id="bedrooms"
                  className="select"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value === '' ? '' : Number(e.target.value))}
                >
                  <option value="">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Properties List */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeading
            title="Available Rental Properties"
            subtitle="Find your perfect home in Kishtwar"
          />
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  className="card group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setSelectedProperty(property.id);
                    setActiveImageIndex(0);
                  }}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {!property.available && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                        Rented
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Home size={16} className="mr-1" />
                      <span>{property.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="flex flex-col items-center">
                        <Bed size={16} className="text-gray-500 mb-1" />
                        <span className="text-gray-700 text-sm">{property.bedrooms} {property.bedrooms > 1 ? 'Beds' : 'Bed'}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Bath size={16} className="text-gray-500 mb-1" />
                        <span className="text-gray-700 text-sm">{property.bathrooms} {property.bathrooms > 1 ? 'Baths' : 'Bath'}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <SquareFeet size={16} className="text-gray-500 mb-1" />
                        <span className="text-gray-700 text-sm">{property.area} sq.ft</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-primary-600">₹{property.price}</span>
                        <span className="text-gray-500 text-sm">/month</span>
                      </div>
                      <button className="btn-primary">View Details</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No rental properties found matching your criteria.</p>
              <button 
                className="mt-4 btn-outline"
                onClick={() => {
                  setSearchTerm('');
                  setMinPrice(lowestPrice);
                  setMaxPrice(highestPrice);
                  setBedrooms('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {(() => {
              const property = rentProperties.find(p => p.id === selectedProperty);
              if (!property) return null;
              
              return (
                <>
                  {/* Image Gallery */}
                  <div className="relative h-[40vh]">
                    <img
                      src={property.images[activeImageIndex]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <button 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
                      onClick={handleNextImage}
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <button
                      className="absolute top-4 left-4 bg-white bg-opacity-80 p-2 rounded-full"
                      onClick={closePropertyDetails}
                    >
                      <ChevronLeft size={20} />
                      <span className="sr-only">Back</span>
                    </button>
                    
                    {!property.available && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                        Rented
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="p-4 border-b overflow-x-auto whitespace-nowrap">
                    <div className="flex gap-2">
                      {property.images.map((image, index) => (
                        <div 
                          key={index}
                          className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer ${
                            index === activeImageIndex ? 'ring-2 ring-primary-500' : ''
                          }`}
                          onClick={() => setActiveImageIndex(index)}
                        >
                          <img
                            src={image}
                            alt={`${property.title} - ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Property Details */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Home size={18} className="mr-2" />
                        <span>{property.location}</span>
                      </div>
                      
                      <div className="flex gap-8 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">₹{property.price}</div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <Bed size={20} className="text-gray-500 mr-1" />
                            <span>{property.bedrooms} Bed{property.bedrooms > 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath size={20} className="text-gray-500 mr-1" />
                            <span>{property.bathrooms} Bath{property.bathrooms > 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex items-center">
                            <SquareFeet size={20} className="text-gray-500 mr-1" />
                            <span>{property.area} sq.ft</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Description</h3>
                        <p className="text-gray-700">{property.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {property.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check size={16} className="text-green-500 mr-2" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {showContactForm ? (
                        <div className="border-t pt-6">
                          {messageSubmitted ? (
                            <div className="text-center">
                              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check size={32} className="text-green-600" />
                              </div>
                              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                              <p className="text-gray-600 mb-6">
                                The property owner will get back to you soon!
                              </p>
                              <button 
                                className="btn-primary"
                                onClick={closePropertyDetails}
                              >
                                Close
                              </button>
                            </div>
                          ) : (
                            <>
                              <h3 className="text-xl font-semibold mb-4">Contact Owner</h3>
                              <form onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <label htmlFor="name" className="label">Your Name</label>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="input"
                                      required
                                      value={formData.name}
                                      onChange={handleFormChange}
                                    />
                                  </div>
                                  <div>
                                    <label htmlFor="phone" className="label">Phone Number</label>
                                    <input
                                      type="tel"
                                      id="phone"
                                      name="phone"
                                      className="input"
                                      required
                                      value={formData.phone}
                                      onChange={handleFormChange}
                                    />
                                  </div>
                                </div>
                                
                                <div className="mb-4">
                                  <label htmlFor="email" className="label">Email</label>
                                  <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="input"
                                    required
                                    value={formData.email}
                                    onChange={handleFormChange}
                                  />
                                </div>
                                
                                <div className="mb-4">
                                  <label htmlFor="moveInDate" className="label">Preferred Move-in Date</label>
                                  <input
                                    type="date"
                                    id="moveInDate"
                                    name="moveInDate"
                                    className="input"
                                    required
                                    value={formData.moveInDate}
                                    onChange={handleFormChange}
                                    min={new Date().toISOString().split('T')[0]}
                                  />
                                </div>
                                
                                <div className="mb-6">
                                  <label htmlFor="message" className="label">Message</label>
                                  <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="input"
                                    placeholder="I am interested in this property..."
                                    required
                                    value={formData.message}
                                    onChange={handleFormChange}
                                  ></textarea>
                                </div>
                                
                                <div className="flex justify-end gap-3">
                                  <button
                                    type="button"
                                    className="btn-outline"
                                    onClick={() => setShowContactForm(false)}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn-primary"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </form>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="border-t pt-6">
                          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <div className="text-gray-500">Contact Person</div>
                              <div className="font-medium">{property.contactName}</div>
                            </div>
                            <div>
                              <div className="flex items-center text-gray-500">
                                <Phone size={16} className="mr-1" />
                                Phone
                              </div>
                              <div className="font-medium">{property.contactPhone}</div>
                            </div>
                            <div className="sm:col-span-2">
                              <div className="flex items-center text-gray-500">
                                <Mail size={16} className="mr-1" />
                                Email
                              </div>
                              <div className="font-medium">{property.contactEmail}</div>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex justify-between">
                            <button
                              className="btn-outline"
                              onClick={closePropertyDetails}
                            >
                              Close
                            </button>
                            <button
                              className="btn-primary"
                              onClick={handleContactClick}
                              disabled={!property.available}
                            >
                              {property.available ? 'Contact Owner' : 'Not Available'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default RentsPage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { tours } from '../data/tours';
import SectionHeading from '../components/common/SectionHeading';
import { Search, Calendar, Clock, MapPin, Users, CheckCircle, ChevronDown, ChevronUp, Tag } from 'lucide-react';

const ToursPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourId: '',
    date: '',
    guests: 1,
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const filteredTours = tours.filter(tour => 
    tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.destinations.some(dest => dest.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleExpand = (id: string) => {
    setExpandedTourId(expandedTourId === id ? null : id);
  };

  const handleBookNow = (tourId: string) => {
    setFormData({
      ...formData,
      tourId
    });
    setShowBookingForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setTimeout(() => {
      setBookingConfirmed(true);
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tour Packages
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover Kishtwar with our carefully curated tour packages
          </motion.p>
        </div>
      </div>

      {/* Search */}
      <section className="py-8 bg-gray-50 shadow-inner">
        <div className="container-custom">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search tours, destinations..."
              className="input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Tours List */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeading
            title="Available Tour Packages"
            subtitle="Choose from our selection of tour packages designed for locals and tourists"
          />
          
          {filteredTours.length > 0 ? (
            <div className="space-y-8">
              {filteredTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-60 md:h-auto">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
                        <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tour.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{tour.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-gray-700">
                          <MapPin size={16} className="mr-2 text-gray-500" />
                          <span>{tour.destinations.length} Destinations</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Tag size={16} className="mr-2 text-gray-500" />
                          <span className="font-semibold">₹{tour.price}</span> <span className="text-gray-500">/person</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock size={16} className="mr-2 text-gray-500" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tour.destinations.map((destination, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md">
                            {destination}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button
                          className="flex items-center text-gray-700 hover:text-primary-600"
                          onClick={() => toggleExpand(tour.id)}
                        >
                          {expandedTourId === tour.id ? (
                            <>
                              <ChevronUp size={16} className="mr-1" />
                              <span>Hide Details</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} className="mr-1" />
                              <span>View Details</span>
                            </>
                          )}
                        </button>
                        
                        <button
                          className="btn-primary"
                          onClick={() => handleBookNow(tour.id)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {expandedTourId === tour.id && (
                    <motion.div
                      className="p-6 border-t bg-gray-50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Itinerary */}
                        <div className="md:col-span-2">
                          <h4 className="text-xl font-semibold mb-4">Itinerary</h4>
                          <div className="space-y-4">
                            {tour.itinerary.map((day) => (
                              <div key={day.day} className="bg-white p-4 rounded-md shadow-sm">
                                <div className="flex items-center mb-2">
                                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                                    {day.day}
                                  </div>
                                  <h5 className="ml-3 font-semibold text-lg">{day.title}</h5>
                                </div>
                                <p className="text-gray-600 ml-11">{day.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Inclusions & Exclusions */}
                        <div>
                          <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-4">Inclusions</h4>
                            <ul className="space-y-2">
                              {tour.inclusions.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle size={16} className="mr-2 text-green-500 mt-1" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold mb-4">Exclusions</h4>
                            <ul className="space-y-2">
                              {tour.exclusions.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-red-500 mr-2">×</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tours found. Try a different search term.</p>
              <button 
                className="mt-4 btn-outline"
                onClick={() => setSearchTerm('')}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-lg w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6">
              {bookingConfirmed ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking. We've sent the tour details to your email.
                  </p>
                  <button
                    className="btn-primary w-full"
                    onClick={() => {
                      setShowBookingForm(false);
                      setBookingConfirmed(false);
                    }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Book Your Tour</h2>
                  <form onSubmit={handleBookingSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="label">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className="label">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="input"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="tourId" className="label">Selected Tour</label>
                      <select
                        id="tourId"
                        name="tourId"
                        className="select"
                        required
                        value={formData.tourId}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a Tour</option>
                        {tours.map(tour => (
                          <option key={tour.id} value={tour.id}>
                            {tour.name} - ₹{tour.price}/person
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="date" className="label">Preferred Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="input pl-10"
                            required
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                          />
                          <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="guests" className="label">Number of Guests</label>
                        <div className="relative">
                          <select
                            id="guests"
                            name="guests"
                            className="select pl-10"
                            required
                            value={formData.guests}
                            onChange={handleInputChange}
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                            ))}
                          </select>
                          <Users size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        className="btn-outline"
                        onClick={() => setShowBookingForm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-primary"
                      >
                        Book Tour
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ToursPage;
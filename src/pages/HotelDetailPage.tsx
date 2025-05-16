import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hotels } from '../data/hotels';
import { Star, MapPin, Phone, Mail, CreditCard, Calendar, ChevronLeft, X, ChevronRight, Check, Wifi, Coffee, Car, Users } from 'lucide-react';

const HotelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find(h => h.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!hotel) {
    return (
      <div className="container-custom text-center py-20 mt-16">
        <h2 className="text-2xl font-bold mb-4">Hotel not found</h2>
        <Link to="/hotels" className="btn-primary">
          Back to Hotels
        </Link>
      </div>
    );
  }

  const handleImageNav = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? hotel.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === hotel.images.length - 1 ? 0 : prev + 1));
  };

  const handleRoomSelect = (roomId: string) => {
    const room = hotel.rooms.find(r => r.id === roomId);
    if (room) {
      setSelectedRoom(roomId);
      setBookingDetails({
        ...bookingDetails,
        roomType: room.type,
      });
      setShowBookingForm(true);
    }
  };

  const handleBookingDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setTimeout(() => {
      setBookingConfirmed(true);
    }, 1000);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'free wi-fi':
      case 'wi-fi':
        return <Wifi size={16} />;
      case 'restaurant':
        return <Coffee size={16} />;
      case 'parking':
        return <Car size={16} />;
      default:
        return <Check size={16} />;
    }
  };

  return (
    <div className="pt-16">
      {/* Hotel Banner */}
      <div className="bg-gray-100">
        <div className="container-custom py-8">
          <Link to="/hotels" className="mb-4 inline-flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft size={20} />
            <span>Back to Hotels</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden h-[50vh] cursor-pointer" onClick={() => setShowGallery(true)}>
              <img
                src={hotel.images[currentImageIndex]}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-md">
                  View Gallery
                </span>
              </div>
              
              {/* Image Navigation */}
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Hotel Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold">{hotel.name}</h1>
                <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                  <Star size={18} className="fill-current mr-1" />
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  {hotel.address}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone size={18} className="mr-2" />
                  {hotel.contactNumber}
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={18} className="mr-2" />
                  {hotel.email}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{hotel.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      {getAmenityIcon(amenity)}
                      <span className="ml-2">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary-600">₹{hotel.pricePerNight}</span>
                  <span className="text-gray-500 text-sm">/night</span>
                </div>
                <button 
                  className="btn-primary"
                  onClick={() => {
                    setShowBookingForm(true);
                    setSelectedRoom(hotel.rooms[0].id);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="mt-4 grid grid-cols-5 gap-2">
            {hotel.images.map((image, index) => (
              <div 
                key={index}
                className={`rounded-md overflow-hidden cursor-pointer h-20 ${
                  index === currentImageIndex ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => handleImageNav(index)}
              >
                <img
                  src={image}
                  alt={`${hotel.name} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Room Types */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Room Types</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotel.rooms.map((room) => (
              <motion.div
                key={room.id}
                className={`border rounded-lg overflow-hidden shadow-sm ${
                  selectedRoom === room.id ? 'border-primary-500 bg-primary-50' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{room.type}</h3>
                    <div className="flex items-center text-gray-600">
                      <Users size={16} className="mr-1" />
                      <span>Up to {room.capacity} guests</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{room.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Room Amenities</h4>
                    <div className="flex flex-wrap gap-3">
                      {room.amenities.map((amenity, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md flex items-center">
                          {getAmenityIcon(amenity)}
                          <span className="ml-1">{amenity}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-xl font-bold text-primary-600">₹{room.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </div>
                    <button
                      className={`btn ${
                        selectedRoom === room.id ? 'bg-primary-700 text-white' : 'btn-primary'
                      }`}
                      onClick={() => handleRoomSelect(room.id)}
                      disabled={!room.available}
                    >
                      {selectedRoom === room.id ? 'Selected' : room.available ? 'Select Room' : 'Not Available'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2"
              onClick={() => setShowGallery(false)}
            >
              <X size={24} />
            </button>
            
            <div className="w-full max-w-4xl">
              <div className="relative h-[70vh]">
                <img
                  src={hotel.images[currentImageIndex]}
                  alt={hotel.name}
                  className="w-full h-full object-contain"
                />
                
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
                  onClick={handleNextImage}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {hotel.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer ${
                      index === currentImageIndex ? 'ring-2 ring-white' : ''
                    }`}
                    onClick={() => handleImageNav(index)}
                  >
                    <img
                      src={image}
                      alt={`${hotel.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Book Your Stay</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowBookingForm(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              {bookingConfirmed ? (
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking with {hotel.name}. Your reservation details have been sent to your email.
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
                <form className="p-6" onSubmit={handleBookingSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="checkIn" className="label">Check-in Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          className="input pl-10"
                          required
                          value={bookingDetails.checkIn}
                          onChange={handleBookingDetailsChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="checkOut" className="label">Check-out Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          className="input pl-10"
                          required
                          value={bookingDetails.checkOut}
                          onChange={handleBookingDetailsChange}
                          min={bookingDetails.checkIn || new Date().toISOString().split('T')[0]}
                        />
                        <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="guests" className="label">Guests</label>
                      <div className="relative">
                        <select
                          id="guests"
                          name="guests"
                          className="select pl-10"
                          value={bookingDetails.guests}
                          onChange={handleBookingDetailsChange}
                          required
                        >
                          {[...Array(6)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                          ))}
                        </select>
                        <Users size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="roomType" className="label">Room Type</label>
                      <select
                        id="roomType"
                        name="roomType"
                        className="select"
                        value={bookingDetails.roomType}
                        onChange={handleBookingDetailsChange}
                        required
                      >
                        {hotel.rooms.map(room => (
                          <option key={room.id} value={room.type} disabled={!room.available}>
                            {room.type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <h3 className="text-lg font-semibold mb-2">Payment Summary</h3>
                    <div className="text-gray-600 mb-2">
                      <div className="flex justify-between">
                        <span>Room Charges</span>
                        <span>
                          {selectedRoom && 
                            `₹${hotel.rooms.find(r => r.id === selectedRoom)?.price || 0}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxes & Fees (18%)</span>
                        <span>
                          {selectedRoom && 
                            `₹${Math.round((hotel.rooms.find(r => r.id === selectedRoom)?.price || 0) * 0.18)}`}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-black mt-2 pt-2 border-t">
                        <span>Total</span>
                        <span>
                          {selectedRoom && 
                            `₹${Math.round((hotel.rooms.find(r => r.id === selectedRoom)?.price || 0) * 1.18)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="payment" className="label">Payment Method</label>
                    <div className="relative">
                      <select
                        id="payment"
                        name="payment"
                        className="select pl-10"
                        required
                      >
                        <option value="card">Credit/Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="payLater">Pay at Hotel</option>
                      </select>
                      <CreditCard size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HotelDetailPage;
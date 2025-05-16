import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { Phone, Mail, MapPin, Send, MessageCircle, Users, Calendar, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with us for inquiries, bookings, or support
          </motion.p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
              <a href="tel:+919876543210" className="text-primary-600 font-medium">+91 9876 543 210</a>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email anytime</p>
              <a href="mailto:info@kishtwar-tourism.com" className="text-primary-600 font-medium">info@kishtwar-tourism.com</a>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 mb-2">Visit our office</p>
              <address className="not-italic text-primary-600 font-medium">
                Tourism Office, Main Market, Kishtwar, J&K
              </address>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeading
            title="Send Us a Message"
            subtitle="We'd love to hear from you. Fill out the form below to get in touch with us."
            center={true}
          />
          
          <div className="max-w-2xl mx-auto">
            {formSubmitted ? (
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting us. We will get back to you as soon as possible.
                </p>
                <button 
                  className="btn-primary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="label">Your Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input pl-10"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <Users size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="label">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input pl-10"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="label">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="input pl-10"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="label">Subject</label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="select pl-10"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Restaurant Booking">Restaurant Booking</option>
                        <option value="Hotel Booking">Hotel Booking</option>
                        <option value="Tour Package">Tour Package</option>
                        <option value="Rental Inquiry">Rental Inquiry</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="label">Your Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="input pl-10"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <MessageCircle size={16} className="absolute left-3 top-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button type="submit" className="btn-primary px-8 py-3 flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our office in Kishtwar"
            center={true}
          />
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26583.016195990804!2d75.7599!3d33.3131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e5c22c96acacb1%3A0x4533e025f350e1ee!2sKishtwar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1613487123456!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Kishtwar Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Kishtwar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start planning your trip now. Browse restaurants, hotels, and attractions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
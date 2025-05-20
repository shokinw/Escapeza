import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/common/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Hotel, Star, Mountain, Heart, Clock, Award, Users, MapPin, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection
        title="Discover the Beauty of Kishtwar"
        subtitle="Where Nature's Splendor Meets Cultural Heritage"
        backgroundImage="/assets/herokishtwar.jpg"
        buttonText="Start Your Journey"
        buttonLink="/restaurants"
      />

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Mountain size={32} />, value: "100+", label: "Scenic Spots" },
              { icon: <UtensilsCrossed size={32} />, value: "50+", label: "Local Restaurants" },
              { icon: <Hotel size={32} />, value: "30+", label: "Hotels & Stays" },
              { icon: <Heart size={32} />, value: "1000+", label: "Happy Visitors" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedSection />

      {/* History Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Rich Cultural Heritage"
            subtitle="A Journey Through Time"
            center={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/history.jpg"
                  alt="Kishtwar History"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ancient Origins</h4>
                    <p className="text-sm text-gray-500">Dating back to 3000 BCE</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Award size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Land of Sapphires</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kishtwar is renowned for its precious sapphire mines, which have been a source of wealth and trade for centuries. The region's sapphires are known for their exceptional quality and unique color.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary-100 p-3 rounded-lg">
                    <Users size={24} className="text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cultural Melting Pot</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The district is home to diverse communities living in harmony, each contributing to the rich tapestry of Kishtwar's cultural heritage through their unique traditions and customs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <MapPin size={24} className="text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Situated at the crossroads of ancient trade routes, Kishtwar has been a vital center for commerce and cultural exchange between different regions of the Himalayas.
                    </p>
                  </div>
                </div>

                <Link to="/history" className="btn-primary inline-flex items-center gap-2 mt-4">
                  Explore Full History
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Kishtwar Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="About Kishtwar"
                subtitle="Known as 'Land of Sapphires and Saffron'"
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kishtwar is a picturesque district in the Indian union territory of Jammu and Kashmir. Nestled in the lap of the Pir Panjal and Zanskar ranges, it's known for its stunning landscapes, including snow-capped mountains, lush valleys, and pristine rivers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The district is famous for its sapphire mines, saffron cultivation, and rich cultural heritage. The local population is diverse, with different communities living together in harmony and preserving their unique traditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/history" className="btn-primary">
                  Explore History
                </Link>
                <Link to="/tours" className="btn-secondary">
                  Book a Tour
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/about.png"
                  alt="Kishtwar Landscape"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-gray-500">(2,500+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Experience Kishtwar"
            subtitle="Discover the best of what Kishtwar has to offer"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Link to="/restaurants" className="group">
              <motion.div
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/food.jpg"
                    alt="Restaurants"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <UtensilsCrossed size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold">Local Cuisine</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Taste the authentic flavors of Kishtwar at local restaurants. From traditional Kashmiri dishes to modern fusion cuisine, experience a culinary journey like no other.
                  </p>
                </div>
              </motion.div>
            </Link>

            <Link to="/hotels" className="group">
              <motion.div
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/hotel.jpg"
                    alt="Hotels"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                      <Hotel size={24} className="text-secondary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold">Comfortable Stays</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Find the perfect accommodation for your stay in Kishtwar. From luxury hotels to cozy guesthouses, we offer options for every budget and preference.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="What Visitors Say"
            subtitle="Hear from those who have experienced Kishtwar"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                text: "My visit to Kishtwar was truly magical. The landscapes are breathtaking, and the local hospitality is amazing. Will definitely come back!",
                name: "Rajesh Kumar",
                location: "Delhi",
                rating: 5
              },
              {
                text: "The food at the local restaurants was delicious, and the hotel accommodations were comfortable. Kishtwar is a hidden gem in the Himalayas!",
                name: "Priya Shah",
                location: "Mumbai",
                rating: 5
              },
              {
                text: "As a photographer, Kishtwar offered me countless opportunities to capture stunning landscapes. The Sinthan Top view is out of this world!",
                name: "Amir Hussain",
                location: "Srinagar",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Explore Kishtwar?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start planning your trip now. Browse restaurants and hotels to create your perfect itinerary.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/restaurants" className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg px-8 py-3">
              Explore Restaurants
            </Link>
            <Link to="/tours" className="btn bg-accent-500 text-white hover:bg-accent-600 shadow-lg px-8 py-3">
              Book a Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
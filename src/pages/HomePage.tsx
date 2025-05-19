import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/common/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { MapPin, UtensilsCrossed, Hotel, Building } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Discover the Beauty of Kishtwar"
        subtitle="Explore the breathtaking landscapes, delicious cuisine, comfortable stays, and unforgettable experiences"
        backgroundImage="/Only-Kishtwar/assets/herokishtwar.jpg"
        buttonText="Explore Now"
        buttonLink="/places"
      />

      <FeaturedSection />

      {/* About Kishtwar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <p className="text-gray-600 mb-6">
                Kishtwar is a picturesque district in the Indian union territory of Jammu and Kashmir. Nestled in the lap of the Pir Panjal and Zanskar ranges, it's known for its stunning landscapes, including snow-capped mountains, lush valleys, and pristine rivers.
              </p>
              <p className="text-gray-600 mb-6">
                The district is famous for its sapphire mines, saffron cultivation, and rich cultural heritage. The local population is diverse, with different communities living together in harmony and preserving their unique traditions.
              </p>
              <p className="text-gray-600">
                Whether you're an adventure enthusiast, a nature lover, a foodie, or a culture explorer, Kishtwar has something to offer for everyone. Come and experience the untouched beauty of this hidden gem in the Himalayas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/Only-Kishtwar/assets/about.png"
                alt="Kishtwar Landscape"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Experience Kishtwar"
            subtitle="Explore the best experiences Kishtwar has to offer"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Link to="/places" className="group">
              <motion.div
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/Only-Kishtwar/assets/explore.jpg"
                    alt="Places to Visit"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin size={20} className="text-accent-600 mr-2" />
                    <h3 className="text-xl font-semibold">Places to Visit</h3>
                  </div>
                  <p className="text-gray-600">
                    Discover the most beautiful and scenic spots in Kishtwar.
                  </p>
                </div>
              </motion.div>
            </Link>

            <Link to="/restaurants" className="group">
              <motion.div
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/Only-Kishtwar/assets/food.jpg"
                    alt="Restaurants"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <UtensilsCrossed size={20} className="text-primary-600 mr-2" />
                    <h3 className="text-xl font-semibold">Local Cuisine</h3>
                  </div>
                  <p className="text-gray-600">
                    Taste the authentic flavors of Kishtwar at local restaurants.
                  </p>
                </div>
              </motion.div>
            </Link>

            <Link to="/hotels" className="group">
              <motion.div
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/Only-Kishtwar/assets/hotel.jpg"
                    alt="Hotels"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Hotel size={20} className="text-secondary-600 mr-2" />
                    <h3 className="text-xl font-semibold">Comfortable Stays</h3>
                  </div>
                  <p className="text-gray-600">
                    Find the perfect accommodation for your stay in Kishtwar.
                  </p>
                </div>
              </motion.div>
            </Link>

            <Link to="/rents" className="group">
              <motion.div
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/Only-Kishtwar/assets/rent.jpg"
                    alt="Rents"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Building size={20} className="text-gray-600 mr-2" />
                    <h3 className="text-xl font-semibold">Rental Homes</h3>
                  </div>
                  <p className="text-gray-600">
                    Rent a comfortable home for a longer stay in Kishtwar.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary-50">
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
                location: "Delhi"
              },
              {
                text: "The food at the local restaurants was delicious, and the hotel accommodations were comfortable. Kishtwar is a hidden gem in the Himalayas!",
                name: "Priya Shah",
                location: "Mumbai"
              },
              {
                text: "As a photographer, Kishtwar offered me countless opportunities to capture stunning landscapes. The Sinthan Top view is out of this world!",
                name: "Amir Hussain",
                location: "Srinagar"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Explore Kishtwar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start planning your trip now. Browse restaurants, hotels, and attractions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/places" className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg">
              Explore Places
            </Link>
            <Link to="/tours" className="btn bg-accent-500 text-white hover:bg-accent-600 shadow-lg">
              Book a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
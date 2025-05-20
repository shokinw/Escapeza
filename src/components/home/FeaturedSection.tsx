import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Hotel, MapPin } from 'lucide-react';

const featuredItems = [
  {
    title: 'Local Cuisine',
    description: 'Experience the authentic flavors of Kishtwar',
    icon: <UtensilsCrossed size={24} />,
    link: '/restaurants',
  },
  {
    title: 'Comfortable Stays',
    description: 'Find the perfect accommodation for your visit',
    icon: <Hotel size={24} />,
    link: '/hotels',
  },
  {
    title: 'Tour Packages',
    description: 'Explore Kishtwar with our curated tours',
    icon: <MapPin size={24} />,
    link: '/tours',
  },
];

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={item.link} className="block">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-primary-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
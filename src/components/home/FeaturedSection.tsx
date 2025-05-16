import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Hotel, MapPin, Building, ArrowRight } from 'lucide-react';

const FeaturedSection: React.FC = () => {
  const features = [
    {
      icon: <UtensilsCrossed size={30} className="text-primary-600" />,
      title: 'Local Restaurants',
      description: 'Discover authentic local cuisine at the best restaurants in Kishtwar',
      link: '/restaurants',
      color: 'bg-primary-50',
      borderColor: 'border-primary-200',
    },
    {
      icon: <Hotel size={30} className="text-secondary-600" />,
      title: 'Comfortable Hotels',
      description: 'Find the perfect accommodation for your stay in Kishtwar',
      link: '/hotels',
      color: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
    },
    {
      icon: <MapPin size={30} className="text-accent-600" />,
      title: 'Tourist Spots',
      description: 'Explore the breathtaking sights and attractions of Kishtwar',
      link: '/places',
      color: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
    {
      icon: <Building size={30} className="text-gray-600" />,
      title: 'Rental Homes',
      description: 'Find comfortable homes for rent during your stay in Kishtwar',
      link: '/rents',
      color: 'bg-gray-50',
      borderColor: 'border-gray-200',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`${feature.color} ${feature.borderColor} border rounded-xl p-6 transition-all duration-300 hover:shadow-md`}
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="inline-flex items-center text-gray-700 font-medium hover:text-primary-600 transition-colors"
              >
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
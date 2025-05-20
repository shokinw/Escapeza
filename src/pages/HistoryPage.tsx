import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const timelineItems = [
  {
    period: "Ancient Origins (7th Century)",
    title: "The Birth of Kashthawata",
    content: "Known as 'Kashthawata' in ancient texts, meaning 'land of wooden houses'. Archaeological findings suggest settlements dating back to the 7th century. The region was ruled by local chieftains called 'Rajas' who maintained semi-autonomous status.",
    image: "https://images.pexels.com/photos/6413751/pexels-photo-6413751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    period: "Medieval Era (14th-16th Century)",
    title: "Cultural Evolution",
    content: "The spread of Islam around the 14th century added new cultural dimensions while maintaining religious harmony. The Chak dynasty's rule in the 16th century saw the construction of the strategic Kishtwar fort. The region became a vital trade hub connecting Kashmir, Ladakh, and Punjab.",
    image: "https://images.pexels.com/photos/11054369/pexels-photo-11054369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    period: "Dogra Period (1846)",
    title: "Integration with J&K State",
    content: "Kishtwar became part of the princely state under Maharaja Gulab Singh. The discovery of sapphire mines in Padder valley brought economic prosperity. The region saw significant administrative and infrastructural development during this period.",
    image: "https://images.pexels.com/photos/17347533/pexels-photo-17347533/free-photo-of-wooden-carved-gates-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    period: "Modern Era (Post 1947)",
    title: "Contemporary Development",
    content: "Post-independence, Kishtwar became part of Jammu and Kashmir within India. Initially a tehsil of Doda district, it was established as a separate district in 2006. Today, it's emerging as a destination for adventure tourism and cultural exploration.",
    image: "https://images.pexels.com/photos/15752155/pexels-photo-15752155/free-photo-of-icicles-on-cliff-of-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const famousPlaces = [
  {
    name: "Sinthan Top",
    period: "Ancient to Modern",
    description: "A strategic mountain pass at 3,748 meters, Sinthan Top has been a crucial trade route since ancient times. It connects Kishtwar with Anantnag and has witnessed the passage of numerous caravans, traders, and travelers throughout history. The pass offers panoramic views of the surrounding Himalayan ranges.",
    image: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Chowgan Ground",
    period: "Historical Center",
    description: "The heart of Kishtwar town, Chowgan Ground has been a central gathering place for centuries. It has hosted numerous cultural events, royal ceremonies, and public gatherings. The ground is surrounded by ancient deodar trees, some dating back several centuries.",
    image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Warwan Valley",
    period: "Ancient Settlement",
    description: "One of the oldest inhabited valleys in the region, Warwan Valley has preserved its traditional way of life. The valley's history is intertwined with ancient trade routes and has been home to various communities for centuries. Its remote location has helped maintain its pristine natural beauty and cultural heritage.",
    image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Machail Mata Temple",
    period: "Ancient Religious Site",
    description: "The sacred Machail Mata Temple has been a significant pilgrimage site for centuries. Located in the remote Padder region, the temple's history dates back to ancient times. It attracts devotees from across the region and is known for its annual pilgrimage during the Machail Yatra.",
    image: "https://images.pexels.com/photos/2825578/pexels-photo-2825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const HistoryPage = () => {
  return (
    <>
      <Helmet>
        <title>History of Escapeza - Historical Places and Heritage</title>
        <meta 
          name="description" 
          content="Explore the rich history and cultural heritage of Escapeza and its famous places, from ancient origins to modern times." 
        />
      </Helmet>
      
      <PageHeader
        title="History of Escapeza"
        subtitle="A journey through time: From ancient settlements to modern development"
        image="https://images.pexels.com/photos/5208378/pexels-photo-5208378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/2">
                    <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full inline-block text-sm font-medium mb-3">
                      {item.period}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-neutral-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
                    </motion.div>
                  </div>
                </div>
                
                {index < timelineItems.length - 1 && (
                  <div className="flex justify-center my-8">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 60 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                      className="w-px bg-primary-200"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Places Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Historical Places of Significance
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover the rich heritage and historical significance of Escapeza's most famous landmarks and places
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {famousPlaces.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-bold text-neutral-900">
                      {place.name}
                    </h3>
                    <span className="text-sm text-primary-600 font-medium">
                      {place.period}
                    </span>
                  </div>
                  <p className="text-neutral-600">
                    {place.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Legacy Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-neutral-50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Cultural Legacy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Festivals & Traditions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Annual Chowgan Mela celebration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Traditional Kashmiri music and dance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Local festivals and religious ceremonies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Arts & Crafts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Intricate woodwork and carving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Traditional carpet weaving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Pashmina shawl crafting</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage; 
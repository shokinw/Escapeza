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

const HistoryPage = () => {
  return (
    <>
      <Helmet>
        <title>History of Kishtwar - Only Kishtwar</title>
        <meta 
          name="description" 
          content="Explore the rich history and cultural heritage of Kishtwar, from its ancient origins to modern times." 
        />
      </Helmet>
      
      <PageHeader
        title="History of Kishtwar"
        subtitle="A journey through time: From ancient settlements to modern development"
        image="https://images.pexels.com/photos/5208378/pexels-photo-5208378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-12 md:py-16">
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
        </div>
      </section>
    </>
  );
};

export default HistoryPage; 
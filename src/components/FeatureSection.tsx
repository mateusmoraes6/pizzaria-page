import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureSection = ({ features }: { features: Feature[] }) => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 decorative-border">
          Nossos Diferenciais
        </h2>
        
        <div className="responsive-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card corner-accent"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 text-orange-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 
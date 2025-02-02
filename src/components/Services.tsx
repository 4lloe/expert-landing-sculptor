import { motion } from "framer-motion";
import { ChartBar, Users, Lightbulb } from "lucide-react";

const services = [
  {
    icon: ChartBar,
    title: "Strategic Planning",
    description: "Develop clear roadmaps for sustainable growth and market leadership.",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams that drive innovation and results.",
  },
  {
    icon: Lightbulb,
    title: "Process Optimization",
    description: "Streamline operations for maximum efficiency and productivity.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-4xl font-bold text-accent mt-2">Expert Solutions for Your Business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-accent mb-4">{service.title}</h3>
              <p className="text-accent/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
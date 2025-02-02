import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Business consultant"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-4xl font-bold text-accent mt-2 mb-6">
              20+ Years of Excellence in Business Consulting
            </h2>
            <p className="text-accent/80 mb-6">
              We bring decades of experience helping businesses like yours achieve their goals. Our approach combines proven methodologies with innovative solutions tailored to your unique needs.
            </p>
            <ul className="space-y-4">
              {["Strategic Planning", "Process Optimization", "Team Development", "Change Management"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-accent">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
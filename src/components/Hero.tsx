import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Business Consulting
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 leading-tight">
              Transform Your Business Vision Into Reality
            </h1>
            <p className="text-lg md:text-xl text-accent/80 mb-8">
              Expert guidance to help you navigate challenges, seize opportunities, and achieve sustainable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Business Consultant"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
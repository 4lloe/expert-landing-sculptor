import { motion } from "framer-motion";
import { GraduationCap, Users, FileText } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    icon: GraduationCap,
    title: "Корпоративные тренинги",
    description: "Эффективные программы обучения для развития вашей команды",
    link: "/trainings",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: Users,
    title: "Фасилитация",
    description: "Профессиональное ведение стратегических сессий и групповых обсуждений",
    link: "/facilitation",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    icon: FileText,
    title: "Написание грантов",
    description: "Помощь в подготовке и оформлении заявок на гранты",
    link: "/grants",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Наши продукты</span>
          <h2 className="text-4xl font-bold text-accent mt-2">Что мы предлагаем</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <product.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-4">{product.title}</h3>
                <p className="text-accent/80 mb-6">{product.description}</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
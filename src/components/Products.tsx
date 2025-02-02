import { motion } from "framer-motion";
import { GraduationCap, Users, FileText } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    icon: GraduationCap,
    title: "Корпоративные тренинги",
    description: "Эффективные программы обучения для развития вашей команды",
    link: "/trainings",
  },
  {
    icon: Users,
    title: "Фасилитация",
    description: "Профессиональное ведение стратегических сессий и групповых обсуждений",
    link: "/facilitation",
  },
  {
    icon: FileText,
    title: "Написание грантов",
    description: "Помощь в подготовке и оформлении заявок на гранты",
    link: "/grants",
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
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <product.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-accent mb-4">{product.title}</h3>
              <p className="text-accent/80 mb-6">{product.description}</p>
              <Button variant="outline" className="w-full">
                Подробнее
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
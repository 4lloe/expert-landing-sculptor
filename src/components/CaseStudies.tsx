import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const cases = [
  {
    title: "Оптимизация процессов в крупной компании",
    category: "Тренинги",
    description: "Разработка и внедрение программы обучения для 200+ сотрудников, что привело к повышению эффективности на 40%",
    result: "40% рост эффективности",
  },
  {
    title: "Стратегическая сессия для стартапа",
    category: "Фасилитация",
    description: "Проведение серии стратегических сессий, которые помогли команде определить ключевые направления развития",
    result: "Четкий план развития",
  },
  {
    title: "Успешный грантовый проект",
    category: "Гранты",
    description: "Помощь в получении гранта на развитие социального предпринимательства в размере 3 млн рублей",
    result: "3 млн рублей",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Кейсы</span>
          <h2 className="text-4xl font-bold text-accent mt-2">Наши успешные проекты</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <Badge className="bg-primary mb-4">{case_.category}</Badge>
              <h3 className="text-xl font-bold text-accent mb-4">{case_.title}</h3>
              <p className="text-accent/80 mb-6">{case_.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                <span className="text-sm text-accent/60">Результат:</span>
                <span className="font-bold text-primary">{case_.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
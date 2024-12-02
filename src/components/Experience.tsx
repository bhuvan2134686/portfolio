import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Integration Engineer",
      company: "Tech Solutions Inc",
      period: "2022 - Present",
      description: "Leading integration projects with Microsoft 365 and Slack. Developing custom solutions using Prismatic."
    },
    {
      title: "Integration Engineer",
      company: "Digital Systems Corp",
      period: "2020 - 2022",
      description: "Implemented API integrations and automated workflows for enterprise clients."
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {exp.title}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <span className="font-medium">{exp.company}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
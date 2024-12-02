import { motion } from 'framer-motion';
import { Code2, Server, Workflow } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-32 px-4 md:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            I'm an Integration Engineer with over 3 years of experience in building robust solutions
            for enterprise clients. Specializing in Microsoft 365, Slack, and Prismatic integrations.
          </p>
        </motion.div>
        
        <motion.div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8" />,
              title: "Integration Development",
              description: "Building seamless connections between different platforms and services"
            },
            {
              icon: <Server className="w-8 h-8" />,
              title: "API Management",
              description: "Designing and implementing scalable API solutions"
            },
            {
              icon: <Workflow className="w-8 h-8" />,
              title: "Workflow Automation",
              description: "Creating efficient automated workflows using Prismatic"
            }
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
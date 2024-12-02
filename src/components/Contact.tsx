import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-16"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <a
            href="mailto:your@email.com"
            className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform hover:-translate-y-1"
          >
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">Get in touch via email</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform hover:-translate-y-1"
          >
            <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300">Connect with me on LinkedIn</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
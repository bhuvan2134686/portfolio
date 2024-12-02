import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-8xl font-bold mb-8"
      >
        Hello, I'm{' '}
        <span className="text-blue-500">Bhuvan Kakkar</span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center space-x-8 text-xl"
      >
        {['About', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
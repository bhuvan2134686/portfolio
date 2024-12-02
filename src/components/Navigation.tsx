import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <nav>
      <div className="flex space-x-8">
        {['About', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
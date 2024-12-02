import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <ThemeToggle />
        
        {/* Initial centered hero section */}
        <motion.div
          style={{ opacity }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
        >
          <Hero />
        </motion.div>

        {/* Header that appears on scroll */}
        <motion.header
          style={{ opacity: headerOpacity }}
          className="fixed top-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-sm z-50 transition-all duration-300"
        >
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              Bhuvan Kakkar
            </h1>
            <Navigation />
          </div>
        </motion.header>

        {/* Main content */}
        <main>
          {/* Spacer for the hero section */}
          <div className="h-screen" />
          
          <div className="relative z-10 bg-black">
            <About />
            <Experience />
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
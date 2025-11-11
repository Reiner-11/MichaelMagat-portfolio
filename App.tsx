import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-gray-100 dark:bg-primary text-gray-800 dark:text-secondary transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="[&>section]:scroll-mt-24">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Hobbies />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

const inter = Inter({ subsets: ['latin'] });

const mainpage = () => {
  return (
    <div className="animated-background">
      <Hero />
      <Skills />
      <div style={{ margin: '70px 0' }}></div>
      
      <About />
    </div>
  );
};

export default mainpage;
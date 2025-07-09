import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClassSchedule from '@/components/ClassSchedule';
import Instructors from '@/components/Instructors';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ClassSchedule />
      <Instructors />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

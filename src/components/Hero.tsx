import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/yoga-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Serene yoga studio"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Inner Peace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to Serenity Studio, where mindfulness meets movement. 
            Join our community of wellness seekers and discover the transformative power of yoga.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Watch Classes
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-card rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                <span className="text-2xl font-bold text-primary">20+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">Certified professionals dedicated to your wellness journey</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-card rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Weekly Classes</h3>
              <p className="text-muted-foreground">Diverse styles and levels for every practitioner</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-card rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                <span className="text-2xl font-bold text-primary">5</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Years Experience</h3>
              <p className="text-muted-foreground">Building community and wellness since 2019</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;
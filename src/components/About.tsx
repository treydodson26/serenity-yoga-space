import { Heart, Users, Leaf, Sun } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in creating a supportive, non-judgmental space where everyone feels welcome and valued."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building genuine connections and fostering a sense of belonging among all our practitioners."
    },
    {
      icon: Leaf,
      title: "Growth",
      description: "Encouraging personal development and transformation through mindful practice and self-discovery."
    },
    {
      icon: Sun,
      title: "Balance",
      description: "Helping you find harmony between body, mind, and spirit in your daily life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2019, Serenity Studio began as a small dream to create a sanctuary 
                where people could escape the chaos of daily life and reconnect with themselves. 
                What started with three instructors in a converted warehouse has grown into a 
                thriving community of wellness seekers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to offer over 50 weekly classes, workshops, and special events 
                that cater to practitioners of all levels. Our mission remains unchanged: to provide 
                a welcoming space where ancient wisdom meets modern living.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an inclusive community where individuals can explore the transformative 
                power of yoga, meditation, and mindful living. We're committed to supporting each 
                person's unique journey toward physical health, mental clarity, and spiritual growth.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:animate-gentle-float transition-all duration-300">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-medium">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Our Community by the Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <p className="text-primary-foreground/80">Active Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">10K+</div>
              <p className="text-primary-foreground/80">Classes Taught</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">20+</div>
              <p className="text-primary-foreground/80">Expert Teachers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">5</div>
              <p className="text-primary-foreground/80">Years of Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
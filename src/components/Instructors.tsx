import { Instagram, Mail, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Chen",
      speciality: "Vinyasa & Meditation",
      experience: "8 years",
      certifications: "RYT-500, Meditation Teacher",
      bio: "Sarah brings a gentle yet powerful approach to yoga, blending traditional practices with modern mindfulness techniques.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      social: {
        instagram: "@sarahyoga",
        email: "sarah@serenitystudio.com"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      speciality: "Power Yoga & Strength",
      experience: "6 years",
      certifications: "RYT-200, Athletic Training",
      bio: "Marcus combines his athletic background with yoga philosophy to create dynamic, strength-building practices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        instagram: "@marcusflow",
        email: "marcus@serenitystudio.com"
      }
    },
    {
      id: 3,
      name: "Elena Patel",
      speciality: "Restorative & Yin",
      experience: "10 years",
      certifications: "RYT-500, Ayurveda Specialist",
      bio: "Elena's nurturing presence and deep knowledge of Ayurveda create transformative healing experiences.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6b3c12a?w=400&h=400&fit=crop&crop=face",
      social: {
        instagram: "@elenayoga",
        email: "elena@serenitystudio.com"
      }
    },
    {
      id: 4,
      name: "David Kim",
      speciality: "Hatha & Pranayama",
      experience: "12 years",
      certifications: "RYT-500, Pranayama Teacher",
      bio: "David's methodical approach and focus on breath work helps students build a strong foundation in yoga.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        instagram: "@davidbreath",
        email: "david@serenitystudio.com"
      }
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Teachers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our experienced instructors are here to guide you on your wellness journey with compassion and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor) => (
            <Card 
              key={instructor.id} 
              className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {instructor.speciality}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Award className="h-4 w-4" />
                    <span>{instructor.experience} experience</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                <div className="text-xs text-center text-muted-foreground mb-6">
                  <p className="font-medium">{instructor.certifications}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-auto border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-auto border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in becoming an instructor at Serenity Studio?
          </p>
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Apply to Teach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
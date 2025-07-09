import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Wellness Avenue", "Peaceful Valley, CA 90210"],
      link: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-YOGA", "Mon-Sun: 6AM-9PM"],
      link: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@serenitystudio.com", "We reply within 24 hours"],
      link: "Send Email"
    }
  ];

  const hours = [
    { day: "Monday - Friday", hours: "6:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 7:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our classes or want to start your yoga journey? 
            We'd love to hear from you and help you find the perfect practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-medium border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <Input placeholder="Your first name" className="border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <Input placeholder="Your last name" className="border-border/50 focus:border-primary" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="border-border/50 focus:border-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input placeholder="What can we help you with?" className="border-border/50 focus:border-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your yoga experience or any questions you have..."
                  className="min-h-[120px] border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-3">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        <Button variant="link" className="p-0 h-auto text-primary hover:text-primary-glow mt-2">
                          {info.link}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Studio Hours */}
            <Card className="bg-gradient-card shadow-medium border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl font-bold text-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Studio Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Holiday hours may vary. Please check our social media for updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
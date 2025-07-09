import { Clock, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ClassSchedule = () => {
  const classes = [
    {
      id: 1,
      name: "Morning Flow",
      instructor: "Sarah Chen",
      time: "7:00 AM - 8:00 AM",
      level: "All Levels",
      capacity: "12 spots",
      available: 3,
      description: "Start your day with gentle movement and breath work",
      type: "Vinyasa"
    },
    {
      id: 2,
      name: "Power Yoga",
      instructor: "Marcus Rodriguez",
      time: "12:00 PM - 1:15 PM",
      level: "Intermediate",
      capacity: "15 spots",
      available: 7,
      description: "Dynamic flows to build strength and endurance",
      type: "Power"
    },
    {
      id: 3,
      name: "Sunset Meditation",
      instructor: "Elena Patel",
      time: "6:30 PM - 7:30 PM",
      level: "All Levels",
      capacity: "20 spots",
      available: 12,
      description: "Peaceful meditation to end your day with serenity",
      type: "Meditation"
    },
    {
      id: 4,
      name: "Yin & Restore",
      instructor: "David Kim",
      time: "8:00 PM - 9:00 PM",
      level: "Beginner",
      capacity: "10 spots",
      available: 2,
      description: "Deep relaxation and gentle stretching",
      type: "Yin"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-accent text-accent-foreground';
      case 'Intermediate': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="classes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Today's Classes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of classes designed to nurture your body, mind, and spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {classes.map((classItem) => (
            <Card 
              key={classItem.id} 
              className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {classItem.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {classItem.type}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{classItem.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-foreground font-medium">{classItem.time}</span>
                  </div>
                  <Badge className={getLevelColor(classItem.level)}>
                    {classItem.level}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{classItem.capacity}</span>
                  </div>
                  <span className={`font-medium ${classItem.available < 5 ? 'text-destructive' : 'text-accent-foreground'}`}>
                    {classItem.available} available
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground">with {classItem.instructor}</span>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-6"
                  disabled={classItem.available === 0}
                >
                  {classItem.available === 0 ? 'Fully Booked' : 'Reserve Your Spot'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
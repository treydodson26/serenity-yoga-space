import { Leaf, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    studio: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Teachers', href: '#instructors' },
      { name: 'Class Schedule', href: '#classes' },
      { name: 'Pricing', href: '#pricing' },
    ],
    practice: [
      { name: 'Beginner Classes', href: '#classes' },
      { name: 'Advanced Practice', href: '#classes' },
      { name: 'Meditation', href: '#classes' },
      { name: 'Workshops', href: '#workshops' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Membership', href: '#membership' },
      { name: 'Gift Cards', href: '#gifts' },
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/10 rounded-full">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Serenity Studio</span>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              A sanctuary for mindful movement and inner peace. Join our community 
              and discover the transformative power of yoga in a welcoming, 
              supportive environment.
            </p>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 h-auto text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 h-auto text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 h-auto text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 h-auto text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Studio</h3>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Practice</h3>
            <ul className="space-y-3">
              {footerLinks.practice.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
              <p className="text-primary-foreground/80">
                Get updates on new classes, workshops, and wellness tips
              </p>
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-primary-foreground/40"
              />
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/80">
          <p>© 2024 Serenity Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
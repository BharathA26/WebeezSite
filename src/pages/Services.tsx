
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Server, Code, ShoppingCart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-webeez-accent1" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React.js, Node.js, and GraphQL. Full-stack solutions tailored to your business needs.",
      features: ["React.js Frontend", "Node.js Backend", "GraphQL API", "Responsive Design", "SEO Optimization"]
    },
    {
      icon: <Server className="h-12 w-12 text-webeez-accent1" />,
      title: "Web Hosting",
      description: "Reliable and fast web hosting solutions with 99.9% uptime guarantee. Secure, scalable hosting for websites of all sizes.",
      features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support", "Scalable Resources"]
    },
    {
      icon: <Code className="h-12 w-12 text-webeez-accent1" />,
      title: "WordPress Development", 
      description: "Professional WordPress websites with custom themes and plugins. Perfect for blogs, business websites, and content management.",
      features: ["Custom Themes", "Plugin Development", "Content Management", "SEO Ready", "Mobile Responsive"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-webeez-accent1" />,
      title: "Shopify Store Setup",
      description: "Complete Shopify e-commerce solutions from setup to customization. Get your online store running with professional design and functionality.",
      features: ["Store Setup", "Theme Customization", "Payment Integration", "Product Management", "Order Tracking"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-webeez-primary mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive web development and digital solutions to help your business succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <CardTitle className="text-2xl font-heading font-bold text-webeez-primary">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-webeez-accent1 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="bg-webeez-secondary hover:bg-webeez-accent1 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-webeez-secondary to-webeez-accent1 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg mb-6">
              Don't see exactly what you're looking for? We can create custom solutions tailored to your specific needs.
            </p>
            <Button variant="outline" className="border-white text-webeez-primary hover:bg-white hover:text-webeez-primary">
  Contact Us for Custom Quote
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

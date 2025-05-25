
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "Modern online store with shopping cart, payment integration, and admin dashboard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Business Portfolio",
      description: "Professional portfolio website with contact forms and service showcase",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["React", "Tailwind CSS", "Email.js"],
      category: "Business"
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Beautiful restaurant site with menu display, reservations, and location info",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      technologies: ["WordPress", "Custom Theme", "Booking System"],
      category: "WordPress"
    },
    {
      id: 4,
      title: "Tech Startup Landing",
      description: "Modern landing page for tech startups with animations and lead capture",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      technologies: ["React", "Framer Motion", "GraphQL"],
      category: "Landing Page"
    },
    {
      id: 5,
      title: "Fashion Store",
      description: "Elegant Shopify store for fashion brands with product filtering and wishlists",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      category: "Shopify"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content-rich blog platform with categories, comments, and social sharing",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Markdown", "CMS"],
      category: "Blog"
    }
  ];

  const categories = ["All", "E-commerce", "Business", "WordPress", "Shopify", "Landing Page", "Blog"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-webeez-primary mb-6">
            Website Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of professionally designed website templates. Each template is built with modern technologies and can be customized to fit your needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-webeez-secondary hover:bg-webeez-accent1" : "border-webeez-secondary text-webeez-secondary hover:bg-webeez-secondary hover:text-white"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-webeez-secondary text-white">
                    {template.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-bold text-webeez-primary">
                  {template.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-webeez-secondary hover:bg-webeez-accent1 text-white"
                  >
                    View Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-webeez-secondary text-webeez-secondary hover:bg-webeez-secondary hover:text-white"
                  >
                    Customize
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Template CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-webeez-secondary to-webeez-accent1 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Need a Custom Template?
            </h2>
            <p className="text-lg mb-6">
              Don't see exactly what you're looking for? We can create a custom template designed specifically for your business needs.
            </p>
            <Button variant="outline" className="border-white text-webeez-primary hover:bg-white hover:text-webeez-primary">
              Request Custom Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;

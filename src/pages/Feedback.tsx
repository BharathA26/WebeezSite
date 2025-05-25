
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Webeez delivered an exceptional website that perfectly captured our brand. Their attention to detail and technical expertise is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, Digital Solutions",
      content: "Working with Webeez was a game-changer for our business. They created a modern, fast website that significantly improved our conversion rates.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The team at Webeez is incredibly professional and skilled. Our e-commerce site not only looks great but performs exceptionally well.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Owner, Local Business",
      content: "From concept to launch, Webeez made the entire process smooth and stress-free. Highly recommend their services!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-webeez-primary mb-6">
            Client Feedback
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Webeez.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-webeez-secondary to-webeez-accent1 text-white">
            <CardContent className="text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
                />
                <div className="text-webeez-accent2 text-2xl mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-white/80">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center space-x-4 mt-6">
            <Button 
              onClick={prevTestimonial}
              variant="outline" 
              className="border-webeez-secondary text-webeez-secondary hover:bg-webeez-secondary hover:text-white"
            >
              Previous
            </Button>
            <Button 
              onClick={nextTestimonial}
              className="bg-webeez-secondary hover:bg-webeez-accent1 text-white"
            >
              Next
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200">
              <CardContent>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-webeez-primary">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-webeez-accent1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-heading font-bold text-webeez-primary mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let us help you create an amazing web presence that your customers will love.
            </p>
            <Button className="bg-webeez-secondary hover:bg-webeez-accent1 text-white px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

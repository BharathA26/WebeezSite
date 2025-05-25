
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code, Globe, Users, Zap, Monitor, Smartphone, Palette, Rocket } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-webeez-accent1" />,
      title: "Full-Stack Development",
      description: "Complete web solutions from frontend to backend"
    },
    {
      icon: <Globe className="h-8 w-8 text-webeez-accent1" />,
      title: "Modern Technologies",
      description: "React, Node.js, GraphQL and cutting-edge tools"
    },
    {
      icon: <Users className="h-8 w-8 text-webeez-accent1" />,
      title: "Expert Team",
      description: "Professional freelancers with proven expertise"
    },
    {
      icon: <Zap className="h-8 w-8 text-webeez-accent1" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of your project. A simple website can be completed in 1-2 weeks, while more complex applications may take 4-8 weeks. We'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! We offer comprehensive maintenance packages that include regular updates, security monitoring, bug fixes, and technical support. We believe in long-term partnerships with our clients."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, TypeScript, Tailwind CSS, and various databases. We choose the best tech stack based on your specific project requirements."
    },
    {
      question: "Can you help with website redesigns?",
      answer: "Absolutely! We specialize in modernizing existing websites, improving user experience, and migrating to newer technologies while preserving your valuable content and SEO rankings."
    },
    {
      question: "Do you offer mobile app development?",
      answer: "We focus on responsive web applications that work perfectly on all devices. For native mobile apps, we can recommend trusted partners in our network who specialize in mobile development."
    },
    {
      question: "What's included in your web development packages?",
      answer: "Our packages typically include custom design, responsive development, SEO optimization, performance optimization, testing, deployment, and initial training. We customize each package based on your specific needs."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Animated Elements */}
      <section className="relative bg-gradient-to-br from-webeez-secondary via-webeez-accent1 to-webeez-primary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Animated Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Monitor className="absolute top-20 left-10 h-12 w-12 text-webeez-accent2/30 animate-[float_6s_ease-in-out_infinite]" />
          <Smartphone className="absolute top-32 right-20 h-10 w-10 text-webeez-accent2/40 animate-[float_4s_ease-in-out_infinite_1s]" />
          <Palette className="absolute bottom-40 left-20 h-14 w-14 text-webeez-accent2/25 animate-[float_5s_ease-in-out_infinite_2s]" />
          <Rocket className="absolute bottom-20 right-32 h-16 w-16 text-webeez-accent2/35 animate-[float_7s_ease-in-out_infinite_3s]" />

          {/* Animated Shapes */}
          <div className="absolute top-16 right-10 w-20 h-20 bg-webeez-accent2/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-32 left-8 w-16 h-16 bg-webeez-accent2/15 rotate-45 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 right-8 w-24 h-6 bg-gradient-to-r from-webeez-accent2/30 to-transparent rounded-full animate-[slide-horizontal_8s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-[slide-up_1s_ease-out]">
              Create a website <br />
              <span className="text-webeez-accent2 inline-block animate-[highlight_2s_ease-in-out_infinite]">without limits</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-[slide-up_1s_ease-out_0.3s_both]">
              Bring your vision to life with the website builder that gives you the tools you need to succeed.
              Professional web development and digital solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slide-up_1s_ease-out_0.6s_both]">
              <Link to="/get-started">
                <Button size="lg" className="bg-webeez-accent2 text-webeez-primary hover:bg-webeez-accent2/90 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 animate-[bounce-in_1s_ease-out_0.9s_both]">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white px-8 py-4 text-lg font-semibold animate-[bounce-in_1s_ease-out_1.2s_both]"
                  style={{ color: '#333333' }}
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Code Snippets */}
        <div className="absolute bottom-10 left-10 bg-gray-900/80 text-green-400 p-4 rounded-lg font-mono text-sm animate-[type-writer_4s_ease-in-out_2s_both] max-w-xs">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="opacity-0 animate-[fade-in_1s_ease-out_3s_forwards]">
            {'const webeez = {'}<br />
            {'  magic: true,'}<br />
            {'  quality: "premium"'}<br />
            {'};'}
          </div>
        </div>
      </section>

      {/* Features Section with Staggered Animations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-webeez-primary mb-4 animate-[slide-up_1s_ease-out] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]">
              Why Choose Webeez?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slide-up_1s_ease-out_0.2s_both] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]">
              We combine technical expertise with creative vision to deliver exceptional web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-[slide-up_0.6s_ease-out] [animation-timeline:view()] [animation-range:entry_0%_cover_20%]"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 animate-[icon-bounce_2s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.5}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-webeez-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Elements */}
      <section className="py-20 bg-webeez-primary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-webeez-accent2/10 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-webeez-accent1/15 rounded-full animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/2 left-10 w-40 h-2 bg-gradient-to-r from-webeez-accent2/20 to-transparent animate-[slide-horizontal_10s_ease-in-out_infinite]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 animate-[slide-up_1s_ease-out] [animation-timeline:view()] [animation-range:entry_0%_cover_40%]">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-[slide-up_1s_ease-out_0.3s_both] [animation-timeline:view()] [animation-range:entry_0%_cover_40%]">
            Let's discuss your ideas and create something amazing together
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-webeez-accent2 text-webeez-primary hover:bg-webeez-accent2/90 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 animate-[bounce-in_1s_ease-out_0.6s_both]">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-webeez-primary mb-4 animate-[slide-up_1s_ease-out] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slide-up_1s_ease-out_0.2s_both] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]">
              Got questions? We've got answers. Here are some of the most common questions we receive.
            </p>
          </div>

          <div className="animate-[slide-up_1s_ease-out_0.4s_both] [animation-timeline:view()] [animation-range:entry_0%_cover_20%]">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left text-webeez-primary font-semibold hover:text-webeez-accent1 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

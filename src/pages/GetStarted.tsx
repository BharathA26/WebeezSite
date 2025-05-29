import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Clock, Users } from 'lucide-react';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    description: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project inquiry submitted!",
      description: "We'll review your requirements and get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      timeline: '',
      description: ''
    });
  };

  const steps = [
    {
      icon: <Users className="h-8 w-8 text-webeez-accent1" />,
      title: "Tell Us About Your Project",
      description: "Fill out the form with your project details and requirements"
    },
    {
      icon: <Clock className="h-8 w-8 text-webeez-accent1" />,
      title: "We'll Get Back to You",
      description: "Our team will review your requirements and contact you within 24 hours"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-webeez-accent1" />,
      title: "Start Building",
      description: "Once approved, we'll begin working on your project immediately"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-webeez-primary mb-6">
            Ready to Work with Webeez?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's turn your ideas into reality. Tell us about your project and we'll provide you with a custom solution that meets your needs and budget.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-webeez-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Inquiry Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-webeez-primary mb-6">
                  Project Inquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-webeez-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-webeez-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-webeez-primary mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-webeez-primary mb-2">
                        Project Type *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="wordpress">WordPress Development</SelectItem>
                          <SelectItem value="shopify">Shopify Store</SelectItem>
                          <SelectItem value="hosting">Web Hosting</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-webeez-primary mb-2">
                      Project Timeline
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-webeez-primary mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project, goals, features you need, target audience, etc."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-webeez-secondary hover:bg-webeez-accent1 text-white py-3 text-lg font-semibold"
                  >
                    Submit 
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gradient-to-br from-webeez-secondary to-webeez-accent1 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold mb-6">
                  Why Choose Webeez?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-webeez-accent2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-white/90">Professional freelancers with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-webeez-accent2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Modern Technology</h4>
                    <p className="text-sm text-white/90">Latest tools and frameworks for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-webeez-accent2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-sm text-white/90">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-webeez-accent2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Full Support</h4>
                    <p className="text-sm text-white/90">Ongoing maintenance and support after launch</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-webeez-accent2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Competitive Pricing</h4>
                    <p className="text-sm text-white/90">Quality work at affordable rates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
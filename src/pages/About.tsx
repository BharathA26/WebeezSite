const About = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-webeez-primary mb-6">
            About Webeez
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about our team and mission
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-webeez-primary text-center mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 text-center">
              We are a team of experienced freelancers specializing in MERN Stack, WordPress, Shopify, DevOps (including CI/CD pipelines and domain registration), and full stack development. Our mission is to empower everyone to establish an online presence by creating high-quality websites and digital solutions at affordable rates. Whether you need a landing page, e-commerce platform, or a fully integrated website with DevOps support, we’ve got you covered. Let’s bring your vision to life with our comprehensive freelance services!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-webeez-secondary mb-3">Team Overview</h3>
              <p className="text-gray-600">Professional freelancers with diverse expertise in MERN Stack, WordPress, Shopify, and DevOps</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-webeez-secondary mb-3">Mission & Vision</h3>
              <p className="text-gray-600">Empowering everyone to create high-quality websites and digital solutions without limits</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-webeez-secondary mb-3">Tools & Technologies</h3>
              <p className="text-gray-600">MERN Stack, WordPress, Shopify, DevOps, and Full-Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
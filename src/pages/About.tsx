
const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-webeez-primary mb-6">
            About Webeez
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about our team and mission
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-semibold text-webeez-primary mb-6">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Dummy content at the moment - this section will be updated with comprehensive information about our team, mission, vision, and the tools & technologies we use.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-webeez-secondary mb-3">Team Overview</h3>
                <p className="text-gray-600">Professional freelancers with diverse expertise</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-webeez-secondary mb-3">Mission & Vision</h3>
                <p className="text-gray-600">Creating websites without limits for our clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-webeez-secondary mb-3">Tools & Technologies</h3>
                <p className="text-gray-600">React.js, Node.js, GraphQL and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

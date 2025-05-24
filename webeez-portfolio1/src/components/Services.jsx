import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaWordpress, FaShoppingCart } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: #f8f9fa;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-bg);
  margin-bottom: var(--spacing-md);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary-text);
`;

const ServiceDescription = styled.p`
  color: var(--primary-text);
  opacity: 0.8;
  line-height: 1.6;
`;

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: <FaServer />,
    title: 'Web Hosting',
    description: 'Reliable and secure hosting solutions for your website.'
  },
  {
    icon: <FaWordpress />,
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins tailored to your needs.'
  },
  {
    icon: <FaShoppingCart />,
    title: 'Shopify Store Setup',
    description: 'Professional e-commerce solutions with Shopify.'
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a wide range of web development services to help your business grow online.
        </p>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </div>
    </ServicesSection>
  );
};

export default Services; 
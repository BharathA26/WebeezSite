import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

// Navbar styling remains unchanged
const Nav = styled.nav`
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  padding: var(--spacing-md) 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all var(--transition-normal);
  box-shadow: ${props => props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

// Updated Logo styling for image only
// Updated Logo styling for better alignment
const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: 30px;
   height: 100%; // Ensure the logo container fits the navbar height
`;

// Updated LogoImage styling for better fit
const LogoImage = styled.img`
  width: 100px; // Increased size for better visibility
  height: 100px;
  object-fit: contain; // Ensures the image scales properly without distortion
  transition: filter var(--transition-normal);
  ${props => props.scrolled && `
    filter: brightness(0.8); // Optional: subtle effect when scrolled
  `}
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: var(--spacing-md);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: ${props => props.scrolled ? 'var(--primary-text)' : 'white'};
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--primary-bg);
  }
`;

const CTAButton = styled(motion.a)`
  background-color: var(--accent-2);
  color: var(--primary-text);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: background-color var(--transition-fast);

  &:hover {
    background-color: var(--primary-bg);
    color: white;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.scrolled ? 'var(--primary-text)' : 'white'};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#" scrolled={scrolled} onClick={() => scrollToSection('home')}>
          <LogoImage src={logo} alt="Webeez Logo" scrolled={scrolled} />
        </Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)} scrolled={scrolled}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink href="#" onClick={() => scrollToSection('home')} scrolled={scrolled}>Home</NavLink>
          <NavLink href="#" onClick={() => scrollToSection('about')} scrolled={scrolled}>About Us</NavLink>
          <NavLink href="#" onClick={() => scrollToSection('services')} scrolled={scrolled}>Services</NavLink>
          <NavLink href="#" onClick={() => scrollToSection('contact')} scrolled={scrolled}>Contact</NavLink>
          <NavLink href="#" onClick={() => scrollToSection('feedback')} scrolled={scrolled}>Feedback</NavLink>
          <NavLink href="#" onClick={() => scrollToSection('templates')} scrolled={scrolled}>Templates</NavLink>
          <CTAButton 
            href="#" 
            onClick={() => scrollToSection('get-started')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
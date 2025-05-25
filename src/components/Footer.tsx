import logo from "../assets/whitelogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-webeez-primary text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Webeez Logo" className="w-50 h-10" />
            <p className="text-gray-300 mb-4">
              Professional team of freelancers specializing in full-stack web
              development and digital solutions. Create a website without
              limits.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-webeez-accent2 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-webeez-accent2 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-webeez-accent2 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-webeez-accent2 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-webeez-accent2 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-webeez-accent2 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className="text-gray-300 hover:text-webeez-accent2 transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-webeez-accent2 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:webeezhelpdesk@gmail.com"
                  className="text-webeez-accent2 hover:text-webeez-secondary"
                >
                  webeezhelpdesk@gmail.com
                </a>
              </li>
              <li>Location: Remote Team</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Webeez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

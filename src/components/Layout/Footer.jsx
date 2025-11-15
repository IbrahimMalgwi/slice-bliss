// components/Layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  const socialPlatforms = [
    { name: "Instagram", url: "https://instagram.com/_slicedblissbakehouse_", icon: "📷" },
    { name: "WhatsApp", url: "https://wa.me/23480341209272", icon: "💬" },
    // { name: "Facebook", url: "https://facebook.com/slicebliss", icon: "👥" },
    // { name: "Twitter", url: "https://twitter.com/slicebliss", icon: "🐦" },
  ];

  const quickLinks = [
    "Home",
    "About",
    "Menu",
    "Gallery",
    "Contact",
    "Order",
    "Gift Cards",
  ];

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="w-12 h-12 bg-custom-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Sliced Bliss" />
            </div>
            <p className="text-secondary-300 mb-6 max-w-md text-lg leading-relaxed">
              Creating sweet moments and delicious memories with every bake.
              Fresh, quality ingredients in every bite since 2022.
            </p>
            <div className="flex space-x-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary-700 hover:bg-custom-orange rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={`Follow us on ${platform.name}`}
                >
                  <span className="text-lg">{platform.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-primary-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-secondary-300 hover:text-primary-300 transition-colors duration-200 text-lg hover:translate-x-1 transform block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-primary-300">
              Visit Us
            </h3>
            <div className="space-y-4 text-secondary-300 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-custom-orange">📍</span>
                <div>
                  <p>27 Femi Adebule Street, Folagoro, </p>
                  <p>Shomulu Lagos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-custom-orange">📞</span>
                <a
                  href="+234 803n412 9272"
                  className="hover:text-primary-300 transition-colors duration-200"
                >
                    +234 803 412 9272
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-custom-orange">✉️</span>
                <a
                  href="mailto:hello@slicedblissbakehouse.com"
                  className="hover:text-primary-300 transition-colors duration-200"
                >
                  hello@slicedblissbakehouse.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-custom-orange">🕒</span>
                <div>
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-center md:text-left">
            &copy; 2025 SlicedBliss Bake House. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-secondary-400 hover:text-primary-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-secondary-400 hover:text-primary-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

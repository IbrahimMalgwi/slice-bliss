// components/Layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialPlatforms = [
    { name: "Instagram", url: "https://instagram.com/slicebliss", icon: "📷" },
    { name: "Facebook", url: "https://facebook.com/slicebliss", icon: "👥" },
    { name: "Twitter", url: "https://twitter.com/slicebliss", icon: "🐦" },
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">🍰</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">SliceBliss</h2>
                <p className="text-amber-200 text-sm">Bake House</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Creating sweet moments and delicious memories with every bake.
              Fresh, quality ingredients in every bite since 2015.
            </p>
            <div className="flex space-x-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-amber-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={`Follow us on ${platform.name}`}
                >
                  <span className="text-lg">{platform.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-amber-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-lg hover:translate-x-1 transform block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-amber-100">Visit Us</h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-amber-400">📍</span>
                <div>
                  <p>123 Bakery Street</p>
                  <p>Sweet City, SC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">📞</span>
                <a
                  href="tel:+15551234567"
                  className="hover:text-amber-300 transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">✉️</span>
                <a
                  href="mailto:hello@slicebliss.com"
                  className="hover:text-amber-300 transition-colors duration-200"
                >
                  hello@slicebliss.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400">🕒</span>
                <div>
                  <p>Monday - Sunday</p>
                  <p>7:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2025 SliceBliss Bake House. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-200"
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

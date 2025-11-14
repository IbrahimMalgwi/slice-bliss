// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/Hero/ImageCarousel";
import SectionTitle from "../components/UI/SectionTitle";
import Button from "../components/UI/Button";
import { products } from "../data/products";

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured);

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "25+", label: "Award Winning" },
    { number: "100%", label: "Fresh Daily" },
  ];

  // Function to open Google Maps with directions
  const openGoogleMaps = () => {
    const address = "123+Bakery+Street+Sweet+City+SC+12345";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <ImageCarousel />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-custom-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Treats"
            subtitle="Our most-loved creations that keep customers coming back for more"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group text-center card p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-custom-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-custom-orange font-bold text-lg mb-4">
                  ${product.price}
                </p>
                <p className="text-secondary-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Button variant="secondary" size="small">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Link to="/menu">
              <Button variant="primary" size="large">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bakery Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Bakery interior"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-4xl font-display font-bold text-secondary-800 mb-6">
                Visit Our Bakery
              </h2>
              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                Step into our warm, inviting bakery where the aroma of fresh
                bread and pastries welcomes you every morning. Our skilled
                bakers start before sunrise to ensure everything is fresh and
                ready for your day.
              </p>
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                Located in the heart of the city, we're more than just a bakery
                - we're a community gathering place where friendships are forged
                over coffee and delicious treats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={openGoogleMaps} variant="primary">
                  Get Directions
                </Button>
                <Link to="/gallery">
                  <Button variant="outline">View Gallery</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Taste the Bliss?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Order online for pickup or delivery and experience the magic of
            SliceBliss Bake House.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link to="/order">
              <Button variant="secondary" size="large">
                Order Now
              </Button>
            </Link>
            <Link to="/menu">
              <Button
                variant="ghost"
                size="large"
                className="text-white border-white hover:bg-white/20"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

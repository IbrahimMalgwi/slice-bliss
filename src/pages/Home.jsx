// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/Hero/ImageCarousel";
import SectionTitle from "../components/UI/SectionTitle";
import Button from "../components/UI/Button";
import { products } from "../data/products";

const Home = () => {
    const featuredProducts = products.filter((product) => product.featured);

    // Function to open Google Maps with directions
    const openGoogleMaps = () => {
        const address = "27 Femi Adebule Street, Folagoro, Shomulu Lagos";
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
        window.open(mapsUrl, "_blank");
    };

    // Format price in Nigerian Naira
    const formatPrice = (price) => {
        return `₦${(price / 100).toLocaleString()}`;
    };

    // Get minimum price for products with multiple sizes
    const getMinPrice = (product) => {
        if (product.prices) {
            return Math.min(...Object.values(product.prices));
        }
        return product.price;
    };

    const stats = [
        { number: "13", label: "Banana Bread Varieties", icon: "🍌" },
        { number: "3", label: "Size Options", icon: "📏" },
        { number: "100%", label: "Fresh Daily", icon: "⭐" },
        { number: "50K+", label: "Happy Customers", icon: "😊" }
    ];

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
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-bold text-custom-orange mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-secondary-600 font-medium text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-gradient-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Popular Banana Bread Varieties"
                        subtitle="Discover our most-loved banana bread creations, available in mini, midi, and regular sizes"
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {featuredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="group text-center card p-6 animate-fade-in-up hover:shadow-xl transition-all duration-300"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="w-20 h-20 mx-auto mb-4 bg-custom-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-14 h-14 object-cover rounded-xl"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-secondary-800 mb-3 line-clamp-2">
                                    {product.name}
                                </h3>
                                <div className="mb-3">
                                    {product.prices ? (
                                        <div className="space-y-1">
                                            <div className="text-custom-orange font-bold text-base">
                                                From {formatPrice(getMinPrice(product))}
                                            </div>
                                            <div className="text-secondary-500 text-xs">
                                                Mini • Midi • Regular
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-custom-orange font-bold text-base">
                                            {formatPrice(product.price)}
                                        </p>
                                    )}
                                </div>
                                <p className="text-secondary-600 text-xs mb-4 leading-relaxed line-clamp-3">
                                    {product.description}
                                </p>
                                <Link to="/menu" className="block">
                                    <Button variant="secondary" size="small" className="w-full">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center animate-fade-in-up">
                        <Link to="/menu">
                            <Button variant="primary" size="large">
                                View All 13 Varieties
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Size Guide Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Choose Your Size"
                        subtitle="Perfect portions for every occasion"
                        className="mb-12"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 card hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">🍰</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary-800 mb-2">Mini</h3>
                            <p className="text-custom-orange font-bold text-lg mb-3">₦1,600 - ₦2,450</p>
                            <p className="text-secondary-600 text-sm">
                                Perfect for individual treats or small tastings
                            </p>
                        </div>
                        <div className="text-center p-6 card hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-custom-orange rounded-full flex items-center justify-center">
                                <span className="text-2xl text-white">🍞</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary-800 mb-2">Midi</h3>
                            <p className="text-custom-orange font-bold text-lg mb-3">₦4,600 - ₦6,500</p>
                            <p className="text-secondary-600 text-sm">
                                Great for sharing with family or small gatherings
                            </p>
                        </div>
                        <div className="text-center p-6 card hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-secondary-800 rounded-full flex items-center justify-center">
                                <span className="text-2xl text-white">🎂</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary-800 mb-2">Regular</h3>
                            <p className="text-custom-orange font-bold text-lg mb-3">₦6,400 - ₦8,700</p>
                            <p className="text-secondary-600 text-sm">
                                Ideal for parties, events, or banana bread lovers
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bakery Story Section */}
            <section className="py-20 bg-gradient-light">
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
                                Our Banana Bread Story
                            </h2>
                            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                                At SlicedBliss BakeHouse, we've perfected the art of banana bread.
                                What started as a family recipe has grown into 13 delicious varieties,
                                each baked with love and the finest ingredients.
                            </p>
                            <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                                From our classic Plain Banana Bread to innovative creations like
                                Double Choco and Oreos, every loaf is crafted to bring you pure bliss
                                in every bite. Available in three perfect sizes to suit every occasion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={openGoogleMaps} variant="primary">
                                    Visit Our Bakery
                                </Button>
                                <Link to="/gallery">
                                    <Button variant="outline">See Our Creations</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer Banner */}
            <section className="py-12 bg-secondary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-white text-left">
                            <h3 className="text-2xl font-bold mb-2">🎉 Special Launch Offer!</h3>
                            <p className="text-primary-200">
                                Get 10% off when you order 3 or more banana bread loaves
                            </p>
                        </div>
                        <Link to="/order">
                            <Button variant="secondary" size="large">
                                Claim Offer Now
                            </Button>
                        </Link>
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
                        Order your favorite banana bread online for pickup or delivery.
                        Freshly baked and delivered with love from SlicedBliss BakeHouse.
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
                                Browse All Varieties
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
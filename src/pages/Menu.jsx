// pages/Menu.jsx
import React, { useState } from "react";
import SectionTitle from "../components/UI/SectionTitle";
import ProductCard from "../components/Menu/ProductCard";
import { products } from "../data/products";
import { useCart } from "../App";

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const { dispatch } = useCart();

    const categories = [
        { id: "all", name: "All Varieties", icon: "🍽️" },
        { id: "banana-bread", name: "Banana Bread", icon: "🍌" },
    ];

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter((product) => product.category === activeCategory);

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    return (
        <div className="min-h-screen py-12 bg-gradient-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Banana Bread Menu"
                    subtitle="Discover all 13 delicious banana bread varieties, available in mini, midi, and regular sizes"
                    className="mb-16"
                />

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category.id
                                    ? "bg-custom-orange text-white shadow-2xl shadow-primary-200"
                                    : "bg-white text-secondary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl"
                            }`}
                        >
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>

                {/* Special Offers */}
                {/*<div className="bg-custom-orange rounded-3xl p-8 text-center text-white shadow-2xl shadow-primary-200">*/}
                {/*    <div className="max-w-2xl mx-auto">*/}
                {/*        <div className="text-4xl mb-4">🎉</div>*/}
                {/*        <h3 className="text-3xl font-bold mb-4">Special Offer!</h3>*/}
                {/*        <p className="text-xl mb-6 opacity-90">*/}
                {/*            Get 10% off when you order 3 or more banana bread loaves!*/}
                {/*        </p>*/}
                {/*        <button className="bg-white text-secondary-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">*/}
                {/*            Claim Your Discount*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Menu;
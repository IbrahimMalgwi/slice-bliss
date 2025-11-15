// components/Menu/ProductCard.jsx
import React, { useState } from 'react';
import Button from '../UI/Button';

const ProductCard = ({ product, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [selectedSize, setSelectedSize] = useState(product.variants ? product.variants[0] : null);

    const formatPrice = (price) => {
        return `₦${(price / 100).toLocaleString()}`;
    };

    const getCurrentPrice = () => {
        if (product.prices && selectedSize) {
            return product.prices[selectedSize];
        }
        return product.price;
    };

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            selectedSize: selectedSize,
            price: getCurrentPrice()
        };
        onAddToCart(cartItem);
    };

    return (
        <div className="group product-card">
            <div className="relative h-64 overflow-hidden">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-secondary-200 animate-pulse flex items-center justify-center">
                        <span className="text-secondary-400">Loading...</span>
                    </div>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    onLoad={() => setImageLoaded(true)}
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                />
                <div className="absolute top-4 right-4">
          <span className="bg-custom-orange text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {product.prices ? formatPrice(getCurrentPrice()) : formatPrice(product.price)}
          </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary-800 group-hover:text-custom-orange transition-colors duration-200">
                        {product.name}
                    </h3>
                </div>

                <p className="text-secondary-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                </p>

                {/* Size Selection for Banana Bread */}
                {product.variants && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Select Size:
                        </label>
                        <div className="flex gap-2">
                            {product.variants.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`flex-1 text-center py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        selectedSize === size
                                            ? 'bg-custom-orange text-white shadow-md'
                                            : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                                    }`}
                                >
                                    <div className="capitalize">{size}</div>
                                    <div className="text-xs mt-1">
                                        {formatPrice(product.prices[size])}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div>
                        {product.prices ? (
                            <div className="text-2xl font-bold text-custom-orange">
                                {formatPrice(getCurrentPrice())}
                            </div>
                        ) : (
                            <div className="text-2xl font-bold text-custom-orange">
                                {formatPrice(product.price)}
                            </div>
                        )}
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        variant="primary"
                        size="small"
                        className="shadow-lg hover:shadow-xl"
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
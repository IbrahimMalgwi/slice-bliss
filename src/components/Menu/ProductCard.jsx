// components/Menu/ProductCard.jsx
import React, { useState } from "react";
import Button from "../UI/Button";

const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group product-card">
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-400">Loading...</span>
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
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ${product.price}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            ${product.price}
          </span>
          <Button
            onClick={() => onAddToCart(product)}
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

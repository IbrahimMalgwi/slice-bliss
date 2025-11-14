// pages/Gallery.jsx
import React, { useState } from "react";
import SectionTitle from "../components/UI/SectionTitle";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80",
      title: "Fresh Pastries",
      category: "pastries",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1989&q=80",
      title: "Custom Cakes",
      category: "cakes",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Bakery Interior",
      category: "bakery",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Banana Bread",
      category: "bread",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1607478900766-3c8f6e13bb71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Oats Special",
      category: "bread",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1596223506389-38a8c706d0c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Carrot Cake",
      category: "cakes",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Red Velvet",
      category: "cakes",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      title: "Fresh Beverages",
      category: "beverages",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Cozy Atmosphere",
      category: "bakery",
    },
  ];

  const categories = [
    "all",
    "cakes",
    "bread",
    "pastries",
    "beverages",
    "bakery",
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openGoogleMaps = () => {
    const address = "123+Bakery+Street+Sweet+City+SC+12345";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Gallery"
          subtitle="Take a visual journey through our bakery and discover the artistry behind every creation"
          className="mb-16"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 capitalize ${
                activeCategory === category
                  ? "bg-custom-orange text-white shadow-2xl shadow-primary-200"
                  : "bg-white text-secondary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl"
              }`}
            >
              <span>
                {category === "all"
                  ? "🎨"
                  : category === "cakes"
                  ? "🎂"
                  : category === "bread"
                  ? "🍞"
                  : category === "pastries"
                  ? "🥐"
                  : category === "beverages"
                  ? "🥤"
                  : "🏪"}
              </span>
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <span className="inline-block bg-custom-orange text-white px-3 py-1 rounded-full text-sm capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Us CTA */}
        <div className="bg-custom-orange rounded-3xl p-8 text-center text-white shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Love What You See?</h3>
            <p className="text-xl mb-6 opacity-90">
              Visit us in person to experience the full SliceBliss magic!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openGoogleMaps}
                className="bg-white text-secondary-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Directions
              </button>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <div className="relative">
                <button
                  className="absolute -top-12 right-0 text-white text-4xl hover:text-custom-orange transition-colors duration-200"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <span className="inline-block bg-custom-orange text-white px-3 py-1 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

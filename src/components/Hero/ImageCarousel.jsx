// components/Hero/ImageCarousel.jsx
import React, { useState, useEffect, useRef } from "react";

// Import your local assets
import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.mp4";

const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef(null);

    const slides = [
        {
            type: "image",
            src: hero1,
            title: "Freshly Baked Banana Bread",
            description: "13 delicious varieties made daily with love and premium ingredients",
            buttonText: "View Varieties"
        },
        {
            type: "image",
            src: hero2,
            title: "Perfect for Every Occasion",
            description: "Available in Mini, Midi & Regular sizes to suit your needs",
            buttonText: "Choose Size"
        },
        {
            type: "video",
            src: hero3,
            title: "Experience SlicedBliss",
            description: "Watch our banana bread magic come to life in our bakery",
            buttonText: "Order Now"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Increased to 6 seconds for better video viewing

        return () => clearInterval(timer);
    }, [slides.length]);

    // Handle video play/pause when slide changes
    useEffect(() => {
        if (slides[currentSlide].type === "video" && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, [currentSlide, slides]);

    const handleSlideChange = (index) => {
        // Pause video if currently playing
        if (slides[currentSlide].type === "video" && videoRef.current) {
            videoRef.current.pause();
        }
        setCurrentSlide(index);
    };

    const handleOrderNow = () => {
        // Scroll to order section or navigate to order page
        const orderSection = document.getElementById('featured-products');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative h-96 md:h-[600px] overflow-hidden rounded-b-3xl">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

                    {/* Media Content */}
                    {slide.type === "video" ? (
                        <video
                            ref={index === currentSlide ? videoRef : null}
                            src={slide.src}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        />
                    ) : (
                        <img
                            src={slide.src}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center text-white px-4 max-w-4xl">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-in-up animation-delay-300 max-w-3xl mx-auto">
                                {slide.description}
                            </p>
                            <button
                                onClick={handleOrderNow}
                                className="btn-primary animate-fade-in-up animation-delay-500"
                            >
                                {slide.buttonText}
                            </button>

                            {/* Video indicator */}
                            {slide.type === "video" && (
                                <div className="mt-4 flex items-center justify-center space-x-2 text-white/80 animate-fade-in-up animation-delay-700">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    <span className="text-sm">Video</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation dots with icons */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-custom-orange scale-110 shadow-lg"
                                : "bg-white/70 hover:bg-white/90"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {slide.type === "video" ? (
                            <span className={`text-sm ${index === currentSlide ? 'text-white' : 'text-gray-700'}`}>
                🎥
              </span>
                        ) : (
                            <div className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-600'}`}></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Progress bar for slideshow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-white/20">
                <div
                    className="h-full bg-custom-orange transition-all duration-1000 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                        transition: 'width 6s linear'
                    }}
                ></div>
            </div>

            {/* Mobile indicators */}
            <div className="md:hidden absolute top-4 right-4 z-30">
                <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentSlide + 1} / {slides.length}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
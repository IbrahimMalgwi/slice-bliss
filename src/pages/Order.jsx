// pages/Order.jsx
import React, { useState, useEffect } from "react";
import { products } from "../data/products";

// Helper functions for localStorage
const CART_STORAGE_KEY = 'slicedbliss_cart';
const SIZES_STORAGE_KEY = 'slicedbliss_selected_sizes';

const loadFromStorage = (key, defaultValue = []) => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        return defaultValue;
    }
};

const saveToStorage = (key, data) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error saving ${key} to localStorage:`, error);
    }
};

const Order = () => {
    // Initialize state from localStorage
    const [cart, setCart] = useState(() => loadFromStorage(CART_STORAGE_KEY, []));
    const [selectedSizes, setSelectedSizes] = useState(() => loadFromStorage(SIZES_STORAGE_KEY, {}));

    // Payment modal state
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Save to localStorage whenever cart or selectedSizes changes
    useEffect(() => {
        saveToStorage(CART_STORAGE_KEY, cart);
    }, [cart]);

    useEffect(() => {
        saveToStorage(SIZES_STORAGE_KEY, selectedSizes);
    }, [selectedSizes]);

    // Format price in Nigerian Naira
    const formatPrice = (price) => {
        return `₦${price.toLocaleString()}`;
    };

    const handleSizeSelect = (productId, size) => {
        setSelectedSizes(prev => ({
            ...prev,
            [productId]: size
        }));
    };

    const addToCart = (product) => {
        // For banana bread products, require size selection
        if (product.variants && !selectedSizes[product.id]) {
            alert(`Please select a size for ${product.name}`);
            return;
        }

        const selectedSize = selectedSizes[product.id];
        const price = product.prices ? product.prices[selectedSize] : product.price;

        const cartItem = {
            ...product,
            selectedSize: selectedSize,
            price: price,
            displayName: selectedSize ? `${product.name} (${selectedSize})` : product.name
        };

        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                item => item.id === cartItem.id && item.selectedSize === cartItem.selectedSize
            );

            let newCart;
            if (existingItemIndex > -1) {
                newCart = prevCart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newCart = [...prevCart, { ...cartItem, quantity: 1 }];
            }

            return newCart;
        });
    };

    const removeFromCart = (productId, size) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === productId && item.selectedSize === size))
        );

        // Also remove the selected size if no items of that product-size combination remain
        setSelectedSizes(prev => {
            const hasOtherItems = cart.some(item =>
                item.id === productId && item.selectedSize === size
            );
            if (!hasOtherItems) {
                const newSizes = { ...prev };
                delete newSizes[productId];
                return newSizes;
            }
            return prev;
        });
    };

    const updateQuantity = (productId, size, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId, size);
            return;
        }

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.selectedSize === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Function to clear cart after successful checkout
    const clearCart = () => {
        setCart([]);
        setSelectedSizes({});
    };

    const openWhatsAppOrder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const message = `Hello SlicedBliss BakeHouse! I'd like to order:\n\n${cart.map(item =>
            `${item.quantity}x ${item.displayName} - ${formatPrice(item.price * item.quantity)}`
        ).join('\n')}\n\nTotal: ${formatPrice(getTotalPrice())}\n\nName: [Your Name]\nPhone: [Your Phone]\nAddress: [Your Address]`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/2348034129272?text=${encodedMessage}`, '_blank');

        // Clear cart after sending WhatsApp order
        clearCart();

        // Optional: Show confirmation message
        setTimeout(() => {
            alert("Order sent! Your cart has been cleared. We'll contact you shortly to confirm your order.");
        }, 1000);
    };

    // Add a clear cart button for testing
    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear your cart?")) {
            clearCart();
        }
    };

    // Payment modal functions
    const openPaymentModal = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        setShowPaymentModal(true);
    };

    const closePaymentModal = () => {
        setShowPaymentModal(false);
        setCustomerDetails({ name: '', phone: '', address: '' });
        setIsSubmitting(false);
    };

    const handleCustomerDetailsChange = (e) => {
        setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value
        });
    };

    const submitPaymentDetails = async (e) => {
        e.preventDefault();

        if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
            alert("Please fill in all customer details.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Send to WhatsApp
            const whatsappMessage = `💰 PAYMENT CONFIRMATION - SlicedBliss BakeHouse 💰

🧾 ORDER SUMMARY:
${cart.map(item => `${item.quantity}x ${item.displayName} - ${formatPrice(item.price * item.quantity)}`).join('\n')}

💰 TOTAL: ${formatPrice(getTotalPrice())}

👤 CUSTOMER DETAILS:
Name: ${customerDetails.name}
Phone: ${customerDetails.phone}
Address: ${customerDetails.address}

🏦 PAYMENT DETAILS:
Account Name: Slicedbliss Bakehouse
Account Number: 6397234607
Bank: Moniepoint

✅ I have made the payment of ${formatPrice(getTotalPrice())} to the account above. Please confirm my order.`;

            const encodedWhatsAppMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/2348034129272?text=${encodedWhatsAppMessage}`, '_blank');

            // Send to Email (using FormSubmit)
            const emailData = {
                name: customerDetails.name,
                phone: customerDetails.phone,
                address: customerDetails.address,
                order: cart.map(item => `${item.quantity}x ${item.displayName} - ${formatPrice(item.price)}`).join(', '),
                total: formatPrice(getTotalPrice()),
                _subject: `Payment Confirmation - ${customerDetails.name}`,
                _template: 'table'
            };

            // Send email via FormSubmit
            await fetch('https://formsubmit.co/ajax/hello@slicedblissbakehouse.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emailData)
            });

            // Show success message
            alert("Payment details submitted successfully! Please check WhatsApp for confirmation.");

            // Clear cart and close modal
            clearCart();
            closePaymentModal();

        } catch (error) {
            console.error("Error submitting payment details:", error);
            alert("There was an error submitting your details. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-12 bg-gradient-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-secondary-800 mb-4">
                        Order Banana Bread
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        Choose from our 13 delicious banana bread varieties, available in Mini, Midi, and Regular sizes
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Product Selection */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className="w-20 h-20 bg-secondary-200 rounded-xl overflow-hidden flex-shrink-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-secondary-800 mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

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
                                                        onClick={() => handleSizeSelect(product.id, size)}
                                                        className={`flex-1 text-center py-2 px-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                                            selectedSizes[product.id] === size
                                                                ? 'bg-custom-orange text-white shadow-md'
                                                                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                                                        }`}
                                                    >
                                                        <div className="capitalize text-xs font-bold">{size}</div>
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
                                                <div className="text-lg font-bold text-custom-orange">
                                                    {selectedSizes[product.id]
                                                        ? formatPrice(product.prices[selectedSizes[product.id]])
                                                        : 'Select size'
                                                    }
                                                </div>
                                            ) : (
                                                <div className="text-lg font-bold text-custom-orange">
                                                    {formatPrice(product.price)}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => addToCart(product)}
                                            disabled={product.variants && !selectedSizes[product.id]}
                                            className="bg-custom-orange hover:bg-primary-600 disabled:bg-secondary-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shopping Cart */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-secondary-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-secondary-800">
                                    Your Order
                                </h2>
                                <div className="flex items-center gap-2">
                                    {getItemCount() > 0 && (
                                        <span className="bg-custom-orange text-white text-sm px-2 py-1 rounded-full">
                                            {getItemCount()} item{getItemCount() !== 1 ? 's' : ''}
                                        </span>
                                    )}
                                    {cart.length > 0 && (
                                        <button
                                            onClick={handleClearCart}
                                            className="text-red-500 hover:text-red-700 text-sm"
                                            title="Clear cart"
                                        >
                                            🗑️ Clear
                                        </button>
                                    )}
                                </div>
                            </div>

                            {cart.length === 0 ? (
                                <div className="text-center py-8">
                                    <div className="text-4xl mb-4">🛒</div>
                                    <p className="text-secondary-500 mb-2">Your cart is empty</p>
                                    <p className="text-secondary-400 text-sm">
                                        Add some delicious banana bread to get started!
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                                        {cart.map((item, index) => (
                                            <div
                                                key={`${item.id}-${item.selectedSize}-${index}`}
                                                className="flex items-center justify-between border-b border-secondary-100 pb-4"
                                            >
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-secondary-800 text-sm">
                                                        {item.displayName}
                                                    </h4>
                                                    <p className="text-custom-orange font-bold text-lg">
                                                        {formatPrice(item.price)}
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                                                        className="w-8 h-8 rounded-full bg-secondary-100 hover:bg-secondary-200 flex items-center justify-center transition-colors duration-200"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                                        className="w-8 h-8 rounded-full bg-secondary-100 hover:bg-secondary-200 flex items-center justify-center transition-colors duration-200"
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                                                        className="text-red-500 hover:text-red-700 ml-2 text-sm"
                                                        title="Remove item"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-secondary-200 pt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-secondary-600">Subtotal:</span>
                                            <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                                        </div>

                                        {/* Special Offer Notice */}
                                        {getItemCount() >= 3 && (
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                                                <div className="flex items-center text-green-800 text-sm">
                                                    <span className="mr-2">🎉</span>
                                                    enjoy the blissful goodness in every slice
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-between items-center mb-4 text-lg">
                                            <span className="font-semibold text-secondary-800">Total:</span>
                                            <span className="text-xl font-bold text-custom-orange">
                                                {formatPrice(getTotalPrice())}
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            <button
                                                onClick={openPaymentModal}
                                                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                            >
                                                Proceed to Payment
                                            </button>

                                            <button
                                                onClick={openWhatsAppOrder}
                                                className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                                            >
                                                <span>💬</span>
                                                Order via WhatsApp
                                            </button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="text-secondary-500 text-sm">
                                                Need help? Call us at <a href="tel:+2348034129272" className="text-custom-orange hover:underline">+234 803 412 9272</a>
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-secondary-800">
                                    Complete Your Payment
                                </h3>
                                <button
                                    onClick={closePaymentModal}
                                    className="text-gray-400 hover:text-gray-600 text-2xl"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Account Information */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                                <h4 className="font-bold text-blue-800 mb-3 text-lg">
                                    💰 Bank Transfer Details
                                </h4>
                                <div className="space-y-2 text-blue-700">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Account Name:</span>
                                        <span>Slicedbliss Bakehouse</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Account Number:</span>
                                        <span>6397234607</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Bank:</span>
                                        <span>Moniepoint</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-green-700">
                                        <span>Amount to Pay:</span>
                                        <span>{formatPrice(getTotalPrice())}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Details Form */}
                            <form onSubmit={submitPaymentDetails} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={customerDetails.name}
                                        onChange={handleCustomerDetailsChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                                        placeholder="Enter your full name"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={customerDetails.phone}
                                        onChange={handleCustomerDetailsChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                                        placeholder="+234 803 412 9272"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                        Delivery Address *
                                    </label>
                                    <textarea
                                        name="address"
                                        value={customerDetails.address}
                                        onChange={handleCustomerDetailsChange}
                                        required
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                                        placeholder="Enter your complete delivery address"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                    <p className="text-yellow-800 text-sm">
                                        <strong>Important:</strong> After payment, click "Submit Payment Details" to send your information via WhatsApp and email. Please keep your transfer receipt for verification.
                                    </p>
                                </div>

                                <div className="flex space-x-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={closePaymentModal}
                                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-xl font-semibold transition-colors duration-200"
                                        disabled={isSubmitting}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin mr-2">⏳</span>
                                                Sending...
                                            </>
                                        ) : (
                                            "Submit Payment Details"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;
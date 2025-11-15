// pages/Contact.jsx
import React, { useState } from "react";
import SectionTitle from "../components/UI/SectionTitle";
import Button from "../components/UI/Button";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Method 1: Direct form submission (most reliable)
            const form = e.target;

            // Create hidden iframe to handle submission without page reload
            const iframe = document.createElement('iframe');
            iframe.name = 'form-submission-iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Set form attributes for FormSubmit.co
            form.action = "https://formsubmit.co/hello@slicedblissbakehouse.com";
            form.method = "POST";
            form.target = "form-submission-iframe";

            // Add hidden fields
            const hiddenFields = {
                '_subject': `New Contact Form: ${formData.subject}`,
                '_template': 'table',
                '_captcha': 'false',
                '_autoresponse': 'Thank you for contacting SlicedBliss BakeHouse! We will get back to you within 24 hours.'
            };

            // Add hidden inputs to form
            Object.entries(hiddenFields).forEach(([key, value]) => {
                let hiddenInput = form.querySelector(`[name="${key}"]`);
                if (!hiddenInput) {
                    hiddenInput = document.createElement('input');
                    hiddenInput.type = 'hidden';
                    hiddenInput.name = key;
                    form.appendChild(hiddenInput);
                }
                hiddenInput.value = value;
            });

            // Submit the form
            form.submit();

            // Success - user stays on page
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            // Clean up iframe after submission
            setTimeout(() => {
                document.body.removeChild(iframe);
            }, 5000);

        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Visit Us",
            details: ["27 Femi Adebule Street", "Folagoro, Shomolu Lagos"],
            link: "https://maps.google.com",
        },
        {
            icon: "📞",
            title: "Call Us",
            details: ["+234 803 412 9272", "Mon-Sat: 9AM-5PM"],
            link: "tel:+2348034129272",
        },
        {
            icon: "✉️",
            title: "Email Us",
            details: ["hello@slicedblissbakehouse.com", "orders@slicedblissbakehouse.com"],
            link: "mailto:hello@slicedblissbakehouse.com",
        },
        {
            icon: "🕒",
            title: "Opening Hours",
            details: ["Monday - Saturday:", "9:00 AM - 5:00 PM"],
            link: null,
        },
    ];

    const socialLinks = [
        { name: "Instagram", url: "https://instagram.com/_slicedblissbakehouse_", icon: "📷" },
        { name: "WhatsApp", url: "https://wa.me/2348034129272", icon: "💬" },
    ];

    return (
        <div className="min-h-screen py-12 bg-gradient-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Get in Touch"
                    subtitle="We'd love to hear from you! Visit us, call, or send a message."
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <span className="text-2xl text-custom-orange">
                                            {item.icon}
                                        </span>
                                        <div>
                                            <h4 className="font-semibold text-secondary-800 mb-1">
                                                {item.title}
                                            </h4>
                                            {item.details.map((detail, idx) => (
                                                <p key={idx} className="text-secondary-600">
                                                    {detail}
                                                </p>
                                            ))}
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    className="text-custom-orange hover:text-primary-600 font-medium text-sm"
                                                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                                                    rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                                                >
                                                    {item.title === "Visit Us" ? "Get Directions →" : "Contact Us →"}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold text-secondary-800 mb-4">
                                    Follow Us
                                </h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="w-12 h-12 bg-primary-100 hover:bg-custom-orange rounded-full flex items-center justify-center transition-colors duration-200"
                                            title={social.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-lg">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Quick Action */}
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-6 text-center">
                            <div className="text-3xl mb-3">💬</div>
                            <h4 className="font-semibold text-green-800 mb-2">
                                Quick Questions?
                            </h4>
                            <p className="text-green-700 text-sm mb-4">
                                Message us directly on WhatsApp for quick responses!
                            </p>
                            <a
                                href="https://wa.me/+2348034129272"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                                Send us a Message
                            </h3>

                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-center text-green-800">
                                        <span className="text-lg mr-2">✅</span>
                                        <span className="font-semibold">Message sent successfully!</span>
                                    </div>
                                    <p className="text-green-700 text-sm mt-1">
                                        Thank you for your message! We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-center text-red-800">
                                        <span className="text-lg mr-2">❌</span>
                                        <span className="font-semibold">Failed to send message</span>
                                    </div>
                                    <p className="text-red-700 text-sm mt-1">
                                        Please try again or contact us directly via WhatsApp/phone.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-secondary-700 mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Your full name"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-secondary-700 mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="your.email@example.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-secondary-700 mb-2"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="+234 803 412 9272"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-secondary-700 mb-2"
                                        >
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Order Question">Order Question</option>
                                            <option value="Catering">Catering</option>
                                            <option value="Feedback">Feedback</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-secondary-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="form-input"
                                        placeholder="Tell us how we can help you..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin mr-2">⏳</span>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-2xl h-96 mt-8 overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9550777398954!2d3.3796259758010327!3d6.52735809346528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d00f8ea116f%3A0x4e888eeab0699b2b!2s27%20Femi%20Adebule%20Street%2C%20Igbobi%2C%20Lagos%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1763229444141!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SlicedBliss BakeHouse Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
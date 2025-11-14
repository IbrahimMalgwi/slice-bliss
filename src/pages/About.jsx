// pages/About.jsx
import React from "react";
import SectionTitle from "../components/UI/SectionTitle";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Head Baker & Founder",
      bio: "With over 15 years of baking experience, Sarah brings passion and creativity to every recipe.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Michael Chen",
      role: "Pastry Chef",
      bio: "Michael specializes in French patisserie and brings international flair to our dessert selection.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Manager",
      bio: "Emily ensures every customer feels welcomed and leaves with a smile.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const values = [
    {
      icon: "🌱",
      title: "Quality Ingredients",
      description:
        "We source only the finest, freshest ingredients for all our baked goods.",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description: "Every item is crafted with care and attention to detail.",
    },
    {
      icon: "🏆",
      title: "Excellence",
      description:
        "We strive for perfection in every recipe and customer interaction.",
    },
    {
      icon: "🤝",
      title: "Community",
      description:
        "We believe in building strong relationships with our customers and community.",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <SectionTitle
          title="Our Story"
          subtitle="From a small home kitchen to your favorite neighborhood bakery"
          className="mb-16"
        />

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-amber-800 mb-6">
              The Beginning
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SliceBliss Bake House started in 2023 when founder Sarah Johnson
              decided to turn her lifelong passion for baking into a business.
              What began as a small home-based operation quickly grew through
              word-of-mouth and the undeniable quality of her creations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Today, we operate from our charming storefront in the heart of the
              city, but we've never lost sight of our roots. Every item we bake
              still carries the same love and attention to detail that started
              it all.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our bakery storefront"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white text-2xl">🍰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="card p-8 animate-fade-in-up">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To create unforgettable baking experiences by combining
              traditional techniques with innovative flavors, using only the
              highest quality ingredients, and serving our community with warmth
              and generosity.
            </p>
          </div>
          <div className="card p-8 animate-fade-in-up animation-delay-200">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the neighborhood bakery where every visit feels like coming
              home, where the aroma of fresh baking welcomes you, and where
              every bite creates a moment of pure bliss.
            </p>
          </div>
        </div>

        {/* Values */}
        <SectionTitle
          title="Our Values"
          subtitle="The principles that guide everything we do"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="card p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4 animate-float">{value.icon}</div>
              <h4 className="text-xl font-bold gradient-text mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <SectionTitle
          title="Meet Our Team"
          subtitle="The passionate people behind the magic"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

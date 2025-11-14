// components/UI/SectionTitle.jsx
import React from "react";

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      <div className="inline-block mb-4">
        <div className="w-12 h-1 bg-custom-orange rounded-full mb-2"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

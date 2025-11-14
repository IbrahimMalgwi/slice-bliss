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
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-2"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

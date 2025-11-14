// components/UI/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white focus:ring-amber-200 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 focus:ring-amber-200 shadow-lg hover:shadow-xl",
    outline:
      "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 focus:ring-amber-200",
    success:
      "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white focus:ring-green-200 shadow-lg hover:shadow-xl",
    ghost:
      "bg-transparent text-gray-600 hover:text-amber-600 hover:bg-amber-50 focus:ring-amber-200",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

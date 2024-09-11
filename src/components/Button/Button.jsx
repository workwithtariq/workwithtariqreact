import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, href, variant = "primary", additionalClasses = "", children }) => {
  const baseClasses = "rounded-full transition-all";
  const bigButtonClasses = "px-6 py-3";

  // Conditional styling based on the variant
  const variants = {
    primary: `${bigButtonClasses} bg-black text-white hover:bg-gray-800`,
    secondary: `${bigButtonClasses} border-2 border-black text-black hover:bg-black hover:text-white`,
    icon: "text-gray-600 hover:text-black w-10", // New icon variant for social buttons
  };

  return (
    <Link
      to={href}
      className={`${baseClasses} ${variants[variant]} ${additionalClasses}`}
    >
      {text || children} {/* Render text or children if provided */}
    </Link>
  );
};

export default Button;

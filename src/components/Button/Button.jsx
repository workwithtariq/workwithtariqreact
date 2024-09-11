import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  href,
  variant = "primary",
  additionalClasses = "",
  children,
  disabled = false,
}) => {
  const baseClasses = "rounded-full transition-all";
  const bigButtonClasses = "px-6 py-3";

  // Conditional styling based on the variant
  const variants = {
    primary: `${bigButtonClasses} bg-black text-white hover:bg-gray-800`,
    secondary: `${bigButtonClasses} border-2 border-black text-black hover:bg-black hover:text-white`,
    icon: `text-gray-600 hover:text-black w-10 hover:bg-blue-200 hover:scale-110`, // New icon variant for social buttons
  };

  if (disabled)
    return (
      <span
        className={`${baseClasses} ${variants[variant]} ${additionalClasses}`}
      >
        {text || children} {/* Render text or children if provided */}
      </span>
    );

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

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: Adds a blur effect during loading
import Button from "../Button/Button"; // Import the reusable Button component
import classNames from "classnames"; // Utility for handling conditional class names

const SocialIcons = ({ iconSrc, url, disabled = false, outline = true }) => {
  const effectType = "blur"; // Reusable effect prop

  const buttonClasses = classNames(
    "border border-black rounded-full flex justify-center items-center",
    {
      "p-2 w-10": !disabled,
      [outline ? "p-2" : "p-0"]: disabled, // Conditional class when disabled
      "border-none w-8": !outline && disabled,
    }
  );

  return (
    <Button
      href={url}
      disabled={disabled}
      outline
      variant="icon"
      additionalClasses={buttonClasses}
    >
      <LazyLoadImage
        src={iconSrc ?? ""} // Optional chaining to handle undefined iconSrc
        alt="social-icon"
        effect={effectType} // Reusing the effectType
        className="w-full"
      />
    </Button>
  );
};

export default SocialIcons;

import React from "react";
import Button from "../Button/Button"; // Import the reusable Button component

const SocialIcons = ({ iconSrc, url }) => {
  return (
    <Button
      href={url} 
      variant="icon" // A new variant specifically for social icons
      additionalClasses="p-2 border border-black rounded-full w-10 flex justify-center items-center"
    >
      <img src={iconSrc} alt="social-icon" className="w-full" />
    </Button>
  );
};

export default SocialIcons;

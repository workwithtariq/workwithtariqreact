import React from "react";

const SocialIcons = ({src}) => {
  return (
    <a
      href="https://linkedin.com"
      className="text-gray-600 hover:text-black transition-all"
    >
      <div className="border border-black rounded-full p-1 w-8">
        <img src={src} alt="" />
      </div>
    </a>
  );
};

export default SocialIcons;

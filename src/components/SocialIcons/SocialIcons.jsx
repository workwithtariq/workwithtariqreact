import React from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({iconSrc, url}) => {
  return (
    <Link
      to={url}
      className="text-gray-600 hover:text-black transition-all"
    >
      <div className="border border-black rounded-full p-2 w-10">
        <img src={iconSrc} alt="" />
      </div>
    </Link>
  );
};

export default SocialIcons;

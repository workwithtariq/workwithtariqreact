import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomeAboutProfileImage = ({ src, alt }) => {
  // return <img src={src} className="w-full rounded-[32px]" alt={alt} />;
  return (
    <LazyLoadImage
      src={src}
      alt={alt} 
      effect="blur" // Optional: Adds a blur effect during lazy loading
      className="w-96 rounded-[32px]"
    />
  );
};

export default HomeAboutProfileImage;

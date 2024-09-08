import React from "react";
import { Button } from "../../Button";

export const CTA = () => {
  return (
    <div className="hero-cta flex justify-center gap-4 mt-10">
      <Button text="Get in Touch" />
      <Button text="View Projects" outline />
    </div>
  );
};

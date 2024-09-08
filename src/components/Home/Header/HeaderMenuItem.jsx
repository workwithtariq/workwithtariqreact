import React from "react";

export const HeaderMenuItem = (props) => {
  
  return (
    <a href="#" className="text-sm font-semibold leading-6 text-white">
      {props.text}
    </a>
  );
};

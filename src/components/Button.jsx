import React from "react";

export const Button = ({ text, outline, classExt = "" }) => {
  return (
    <button
      className={`${classExt} font-bold px-4 py-2 rounded-full ${
        outline
          ? "text-white bg-none border border-white"
          : "text-black bg-white"
      } `}
    >
      {text || "Submit"}
    </button>
  );
};

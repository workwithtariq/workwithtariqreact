import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const MenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <XIcon className="h-8 w-8 text-black" /> : <MenuIcon className="h-8 w-8 text-black" />}
      </button>
    </div>
  );
};

export default MenuToggle;

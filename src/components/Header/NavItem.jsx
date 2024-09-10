import React from "react";

const NavItem = ({ href, children }) => {
  return (
    <li className="mt-4 md:mt-0">
      <a
        href={href}
        className="relative text-2xl transition-colors duration-300 hover:text-gray-500 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-gray-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;

import React from "react";
import NavItem from "../Header/NavItem";

const Footer = () => {
  return (
    <div className="mt-32 flex flex-col gap-8 pb-8 text-center">
      <div className="flex justify-center">
        <ul className="flex gap-8 m-0 p-0 list-none">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
      </div>
      <div className="flex justify-center">
        <span className="text-slate-500">Copyright © 2024 Work with Tariq. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import NavItem from './NavItem';

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex md:space-x-8 m-0 p-0 list-none">
      <NavItem href="/about">About</NavItem>
      <NavItem href="/experience">Experience</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </ul>
  );
};

export default DesktopNav;

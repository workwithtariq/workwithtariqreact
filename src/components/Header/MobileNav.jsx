import React from 'react';
import NavItem from './NavItem';

const MobileNav = ({ isOpen }) => {
  return (
    <ul
      className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } bg-white absolute top-16 left-0 right-0 z-10 pl-4 pr-10 text-right pb-2`}
    >
      <NavItem href="/about">About</NavItem>
      <NavItem href="/experience">Experience</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </ul>
  );
};

export default MobileNav;

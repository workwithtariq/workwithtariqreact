import React from "react";
import { Hamburger } from "./Hamburger";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { LoginBtn } from "./LoginBtn";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { SubMenuHeader } from "./SubMenuHeader";
import "./Header.css";

export const Header = () => {
  return (
    <header className="bg-[#222222]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo />
        <Hamburger />

        <div className="hidden lg:flex lg:gap-x-12">
          {/* <SubMenuHeader /> */}

          <HeaderMenuItem text={"Home"} />
          <HeaderMenuItem text={"Projects"} />
          <HeaderMenuItem text={"Contact"} />
        </div>

        {/* <LoginBtn /> */}
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <MobileMenu />
    </header>
  );
};

import React from "react";
import { Img } from "../Img";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";
import Facebook from "../../assets/fb.svg";
import LinkedIn from "../../assets/in.svg";
import WhatsApp from "../../assets/wa.svg";

export const Footer = () => {
  return (
    <div className="w-[1280px] mx-auto my-40">
      <h2 className="text-2xl mt-4">Contact</h2>
      <p className="text-slate-200 mt-4 w-[800px]">
        Seasoned Full Stack Software Engineer with over 8 years of hands-on
        experience in designing and implementing robust, scalable, and
        innovative web solutions. Adept at leveraging a comprehensive skill set
        encompassing front-end and back-end technologies
      </p>

      <div className="contact-wrapper flex flex-col gap-4 mt-6">
        <div className="contact-icon-container flex gap-2">
          <Img src={Phone} classExt="w-6 bg-white p-1 rounded-full" />
          <a href="tel:+8801517010100">+8801517010100</a>
        </div>
        <div className="contact-icon-container flex gap-2">
          <Img src={Mail} classExt="w-6 bg-white p-1 rounded-full" />
          <a href="mailto:hello@workwithtariq.com">hello@workwithtariq.com</a>
        </div>
      </div>

      <div className="social mt-6">
        <div className="flex gap-4">
          <a href="">
            <Img src={WhatsApp} classExt="w-10 bg-white p-1 rounded-full" />
          </a>
          <a href="#">
            <Img src={Facebook} classExt="w-10 bg-white p-1 rounded-full" />
          </a>
          <a href="#">
            <Img src={LinkedIn} classExt="w-10 bg-white p-1 rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import HomeSectionHeader from "./HomeSectionHeader";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";

const HomeContact = () => {
  return (
    <div className="mt-40">
      <HomeSectionHeader subtitle="Get In Touch" title="Contact Me" />
      <div className="border border-slate-400 w-fit mx-auto p-6 rounded-[32px] flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <SocialIcons disabled={true} iconSrc={MailIcon} />
          <a href="mailto:hello@workwithtariq.com" className="text-xl">hello@workwithtariq.com</a>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <SocialIcons disabled={true} iconSrc={PhoneIcon} />
          <a href="tel:+8801517010100" className="text-xl">+8801517010100</a>
        </div>
        
      </div>
    </div>
  );
};

export default HomeContact;

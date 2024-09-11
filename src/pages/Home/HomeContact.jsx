import React from "react";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import HomeSectionHeader from "./HomeSectionHeader";
import FacebookIcon from "../../assets/fb.svg";
import LinkedInIcon from "../../assets/in.svg";
import WhatsAppIcon from "../../assets/wa.svg";
import YoutubeIcon from "../../assets/yt.svg";
import Github from "../../assets/github.svg";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";

const HomeContact = () => {
  return (
    <div className="mt-40">
      <HomeSectionHeader subtitle="Get In Touch" title="Contact Me" />
      <div className="border border-slate-400 w-fit mx-auto p-6 rounded-[32px] flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <SocialIcons disabled={true} iconSrc={MailIcon} />
          <span className="text-xl">hello@workwithtariq.com</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <SocialIcons disabled={true} iconSrc={PhoneIcon} />
          <span className="text-xl">+8801517010100</span>
        </div>
        
      </div>
    </div>
  );
};

export default HomeContact;

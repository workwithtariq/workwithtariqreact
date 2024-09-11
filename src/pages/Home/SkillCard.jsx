import React, { memo } from "react";
import SocialIcons from "../../components/SocialIcons/SocialIcons";

const SkillCard = memo(({ iconSrc, skill, level }) => {
  return (
    <div className="flex items-start gap-2 w-32">
      <div className="w-8">
        <SocialIcons iconSrc={iconSrc} disabled outline={false} />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{skill}</h4>
        <span className="text-slate-500">{level}</span>
      </div>
    </div>
  );
});

export default SkillCard;

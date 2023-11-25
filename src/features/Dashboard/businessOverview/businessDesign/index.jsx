import FireIcon from "../../../../assets/Icons/BusinessOverview/fire.svg";
import PlayIcon from "../../../../assets/Icons/BusinessOverview/play.svg";
import TimerIcon from "../../../../assets/Icons/BusinessOverview/timer.svg";

import { Card } from "../../../../components/card";
import Avatars from "./avatar";

const BusinessDesign = () => {
  return (
    <div className="w-1/4">
      <Card
        heading={"Business Design"}
        value={
          <div className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[16px] tracking-[-0.32px] leading-[28px] whitespace-nowrap">
            New lession is available
          </div>
        }
        className={"items-center"}
        leftIcon={
          <>
            <img src={FireIcon} />
          </>
        }
      />
      <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[20px] tracking-[-0.40px] leading-[32px] mr-[10px] mt-10">
        What do you need to know to
        <br />
        create better products?
      </p>
      <div className="flex gap-7 mt-8">
        <div className="flex items-center gap-1">
          <img src={TimerIcon} />
          <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[14px] tracking-[-0.28px] leading-[24px] whitespace-nowrap ">
            85 mins
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={PlayIcon} />
          <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[14px] tracking-[-0.28px] leading-[24px] whitespace-nowrap ">
            Video format
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <Avatars />
        <button className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-white bg-[#4318FF] px-4 py-3 rounded-full text-[14px] text-center tracking-[0.28px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BusinessDesign;
import Img1 from "../../../../assets/Icons/BusinessOverview/Persons/ (1).svg";
import Img2 from "../../../../assets/Icons/BusinessOverview/Persons/ (2).svg";
import Img3 from "../../../../assets/Icons/BusinessOverview/Persons/ (3).svg";
import Img4 from "../../../../assets/Icons/BusinessOverview/Persons/ (4).svg";

const Avatars = () => {
  return (
    <div className="relative w-[180px]">
      <img src={Img1} className="w-[35px]  rounded-full absolute z-1 left-0" />
      <img
        src={Img2}
        className="w-[35px] rounded-full absolute z-2 top-0 left-8 outline outline-4 outline-offset-0 outline-white"
      />
      <img
        src={Img3}
        className="w-[35px]  rounded-full absolute z-3 top-0 left-16 outline outline-4 outline-offset-0 outline-white"
      />
      <img
        src={Img4}
        className="w-[35px]  rounded-full absolute z-4 top-0 left-24 outline outline-4 outline-offset-0 outline-white"
      />
      <div className="relative left-32 z-5 top-0 w-[40px] h-[40px] rounded-full outline outline-4 outline-offset-0 outline-white bg-white">
        <div className="absolute top-[20%] left-[20%] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[12px] tracking-[-0.28px] leading-[24px] whitespace-nowrap">
          +18
        </div>
      </div>
    </div>
  );
};

export default Avatars;

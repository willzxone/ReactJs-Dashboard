const Avatars = () => {
  return (
    <div className="relative w-[180px]">
      <img
        src={"/src/assets/Icons/BusinessOverview/Persons/ (1).svg"}
        className="w-[35px]  rounded-full absolute z-1 left-0"
      />
      <img
        src={"/src/assets/Icons/BusinessOverview/Persons/ (2).svg"}
        className="w-[35px] rounded-full absolute z-2 top-0 left-8 outline outline-4 outline-offset-0 outline-white"
      />
      <img
        src={"/src/assets/Icons/BusinessOverview/Persons/ (3).svg"}
        className="w-[35px]  rounded-full absolute z-3 top-0 left-16 outline outline-4 outline-offset-0 outline-white"
      />
      <img
        src={"/src/assets/Icons/BusinessOverview/Persons/ (4).svg"}
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

import MoreIcon from "../../../../assets/Icons/TaskOverview/more_horiz.svg?react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Tasks"
            className="inline accent-[#4318FF] ring-white border-[#A3AED0] outline-cyan-50 mr-2"
          />
          <label
            htmlFor="Tasks"
            className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[18px]"
          >
            Tasks
          </label>
        </div>
        <MoreIcon className="text-[#4318FF] dark:text-white" />
      </div>
    </>
  );
};

export default Header;

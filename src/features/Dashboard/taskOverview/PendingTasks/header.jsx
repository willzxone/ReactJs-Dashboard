import MoreIcon from "../../../../assets/Icons/TaskOverview/more_horiz.svg?react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Tasks"
            className="inline accent-primary ring-white border-secondary outline-cyan-50 mr-2"
          />
          <label htmlFor="Tasks" className="font-bold text-primary text-[18px]">
            Tasks
          </label>
        </div>
        <MoreIcon className="text-primary" />
      </div>
    </>
  );
};

export default Header;

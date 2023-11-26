/* eslint-disable react/prop-types */
import SearchIcon from "../../assets/Icons/UserControl/SearchIcon.svg?react";
import InfoIcon from "../../assets/Icons/UserControl/info.svg?react";
import MoonIcon from "../../assets/Icons/UserControl/moon.svg?react";
import NotificationIcon from "../../assets/Icons/UserControl/notification.svg?react";
import UserProfilePic from "../../assets/Images/UserControl/userprofile.png";
export const UserControls = ({ handleThemeSwitch }) => {
  return (
    <aside className="flex justify-center items-center gap-5 cursor-pointer dark:bg-[#111C44] p-3 rounded-full">
      <div className="flex justify-center items-center gap-1 dark:bg-[#0B1437] p-2 rounded-3xl">
        <div className="mx-1">
          <SearchIcon className={"text-[#2B3674] dark:text-white "} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="focus:border-none placeholder:font-normal dark:bg-[#0B1437] dark:placeholder:text-[#FFFFFF]  placeholder:text-[#8e9ab9] placeholder:[font-family:'DM_Sans-Regular',Helvetica] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-[#8e9ab9] text-[14px] tracking-[-0.28px] leading-[20px] border-none rounded-md outline-none"
        />
      </div>
      <div className="flex justify-center gap-5 items-center text-[#A3AED0] dark:text-white ">
        <InfoIcon className="hover:text-[#4318FF]" />
        <MoonIcon
          className="hover:text-[#4318FF]"
          onClick={handleThemeSwitch}
        />
        <NotificationIcon className="hover:text-[#4318FF]" />
      </div>
      <img
        src={UserProfilePic}
        alt="userprofile"
        className="h-8 w-8 rounded-full object-cover"
      />
    </aside>
  );
};

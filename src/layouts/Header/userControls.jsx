import SearchIcon from "../../assets/Icons/UserControl/SearchIcon.svg";
import InfoIcon from "../../assets/Icons/UserControl/info.svg";
import MoonIcon from "../../assets/Icons/UserControl/moon.svg";
import NotificationIcon from "../../assets/Icons/UserControl/notification.svg";
import UserProfilePic from "../../assets/Images/UserControl/userprofile.png";
export const UserControls = () => {
  return (
    <aside className="flex justify-center items-center gap-5 cursor-pointer">
      <div className="flex justify-center gap-1">
        <img src={SearchIcon} alt="searchicon" />
        <input
          type="text"
          placeholder="Search"
          className="focus:border-none placeholder:font-normal placeholder:text-[#8e9ab9] placeholder:[font-family:'DM_Sans-Regular',Helvetica] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-[#8e9ab9] text-[14px] tracking-[-0.28px] leading-[20px] border-none rounded-md outline-none"
        />
      </div>
      <div className="flex justify-center gap-5">
        <img src={InfoIcon} alt="infoicon" />
        <img src={MoonIcon} alt="moonicon" />
        <img src={NotificationIcon} alt="notificationicon" />
      </div>
      <img
        src={UserProfilePic}
        alt="userprofile"
        className="h-8 w-8 rounded-full object-cover"
      />
    </aside>
  );
};

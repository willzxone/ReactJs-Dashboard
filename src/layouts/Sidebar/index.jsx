import { buttonData } from "../../data/sidebar/buttonData";
import { useState } from "react";

export const SideBar = () => {
  const [isActive, setActive] = useState("");
  return (
    <div className="flex flex-col h-[100vh] w-[15%] items-start gap-[10px] rounded-[0px_0px_20px_0px] overflow-hidden dark:bg-[#111C44] ">
      <div className="w-full">
        <div className="[font-family:'Poppins',Helvetica] font-bold text-[#2b3674] text-[26px] tracking-[0] leading-[26px] whitespace-nowrap py-14 w-[100%] pl-8 dark:text-[#FFFFFF]">
          Visric
        </div>
        <hr className="border-[#FFFFFF1A]" />
      </div>
      <div className=" bg-white w-[100%] mt-3 dark:bg-[#111C44] pl-8 ">
        <div className=" w-[100%]">
          {buttonData.map((btn) => {
            return (
              <div
                onClick={() => setActive(btn.name)}
                key={btn.name}
                className="flex justify-between items-center "
              >
                <div
                  className={`h-[36px] cursor-pointer flex items-center my-2`}
                >
                  <img
                    className="w-[24px] h-[24px]  "
                    alt="Icon"
                    src={btn.icon}
                  />
                  <div
                    className={`font-medium text-[${
                      isActive === btn.name ? "#2b3674" : "#a3aed0"
                    }] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap ml-3 dark:text-[#FFFFFF]`}
                  >
                    {btn.name}
                  </div>
                </div>
                {isActive === btn.name && (
                  <div className="w-[4px] h-[36px] left-[253px] bg-[#4218ff] rounded-[25px] dark:bg-[#7551FF]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

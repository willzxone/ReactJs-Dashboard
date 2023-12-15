import { buttonData } from "../../data/sidebar/buttonData";
import { useState } from "react";

export const SideBar = () => {
  const [isActive, setActive] = useState("");
  return (
    <div className="flex flex-col h-[100vh] w-[15%] items-start gap-[10px] rounded-[0px_0px_20px_0px] overflow-hidden dark:bg-card ">
      <div className="w-full">
        <div className="font-bold text-primary text-[26px] tracking-[0] leading-[26px] whitespace-nowrap py-14 w-[100%] pl-8">
          Visric
        </div>
        <hr className="border-[#FFFFFF1A]" />
      </div>
      <div className="w-[100%] mt-3 dark:bg-card pl-8 ">
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
                  <btn.icon
                    className={`w-[24px] h-[24px] ${
                      isActive === btn.name ? "text-primary" : "text-secondary"
                    }`}
                  />
                  <div
                    className={`font-medium ${
                      isActive === btn.name ? "text-primary" : "text-secondary"
                    } text-[16px] tracking-[0.32px] leading-[30px] whitespace-nowrap ml-3 `}
                  >
                    {btn.name}
                  </div>
                </div>
                {isActive === btn.name && (
                  <div className="w-[4px] h-[36px] left-[253px] bg-dark rounded-[25px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

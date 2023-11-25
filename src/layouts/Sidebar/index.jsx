import { buttonData } from "../../data/sidebar/buttonData";
import { useState } from "react";

export const SideBar = () => {
  const [isActive, setActive] = useState("");
  return (
    <div className="flex flex-col h-[100vh] w-[15%] items-start gap-[10px] rounded-[0px_0px_20px_0px] overflow-hidden mt-14">
      <div className="[font-family:'Poppins',Helvetica] font-bold text-[#2b3674] text-[26px] tracking-[0] leading-[26px] whitespace-nowrap">
        Visric
      </div>
      <div className=" bg-white w-[100%] mt-14">
        <div className=" w-[100%]">
          {buttonData.map((btn) => {
            return (
              <div
                onClick={() => setActive(btn.name)}
                key={btn.name}
                className="flex justify-between items-center "
              >
                <div
                  className={`h-[36px] cursor-pointer flex items-center my-6`}
                >
                  <img
                    className="w-[24px] h-[24px]  "
                    alt="Icon"
                    src={btn.icon}
                  />
                  <div
                    className={`font-medium text-[${
                      isActive === btn.name ? "#2b3674" : "#a3aed0"
                    }] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap ml-3`}
                  >
                    {btn.name}
                  </div>
                </div>
                {isActive === btn.name && (
                  <div className="w-[4px] h-[36px] left-[253px] bg-[#4218ff] rounded-[25px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

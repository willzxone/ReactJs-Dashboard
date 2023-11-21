import { buttonData } from "../../data/sidebar/buttonData";
import { useState } from "react";

export const SideBar = () => {
  const [isActive, setActive] = useState("");
  return (
    <div className="inline-flex flex-col h-[97vh] items-start gap-[10px] relative rounded-[0px_0px_20px_0px] overflow-hidden">
      <div className="relative w-[290px] h-[97vh] bg-white">
        <div className="absolute w-[259px] h-[316px] top-[168px] left-[31px]">
          {buttonData.map((btn) => {
            return (
              <div
                onClick={() => setActive(btn.name)}
                key={btn.name}
                className={`w-[259px] h-[36px] cursor-pointer flex items-center my-6`}
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

                {isActive === btn.name && (
                  <div className="absolute w-[4px] h-[36px] left-[253px] bg-[#4218ff] rounded-[25px]" />
                )}
              </div>
            );
          })}
        </div>
        <div className="absolute w-[76px] h-[26px] top-[56px] left-[54px]">
          <div className="relative w-[78px] h-[26px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-[#2b3674] text-[26px] tracking-[0] leading-[26px] whitespace-nowrap">
              Visric
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

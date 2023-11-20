import { buttonData } from "../../data/sidebar/buttonData";
import { useState } from "react";

export const SideBar = () => {
  const [isActive, setActive] = useState("");
  return (
    <div className="inline-flex flex-col h-[1152px] items-start gap-[10px] relative rounded-[0px_0px_20px_0px] overflow-hidden">
      <div className="relative w-[290px] h-[1152px] bg-white">
        <div className="absolute w-[259px] h-[316px] top-[168px] left-[31px]">
          {buttonData.map((btn, index) => {
            return (
              <div
                onClick={() => setActive(btn.name)}
                key={btn.name}
                className={`absolute w-[259px] h-[36px] top-[${
                  index * 56
                }px] left-[2px] cursor-pointer`}
              >
                <div
                  className={`left-[36px] font-medium text-[${
                    isActive === btn.name ? "#2b3674" : "#a3aed0"
                  }] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap`}
                >
                  {btn.name}
                </div>
                <img
                  className="w-[24px] h-[24px] top-[6px] absolute left-0"
                  alt="Icon"
                  src={btn.icon}
                />
                {isActive === btn.name && (
                  <div className="absolute w-[4px] h-[36px] top-0 left-[253px] bg-[#4218ff] rounded-[25px]" />
                )}
              </div>
            );
          })}
          {/* <div className="absolute w-[259px] h-[36px] top-[280px] left-[2px]">
            <div className="left-[36px] font-medium text-[#a3aed0] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap">
              Sign In
            </div>
            <img
              className="w-[24px] h-[24px] top-[6px] absolute left-0"
              alt="Icon"
              src="https://c.animaapp.com/1YWv7WFh/img/icon.svg"
            />
          </div>
          <div className="absolute w-[259px] h-[36px] top-[224px] left-[2px]">
            <div className="left-[36px] font-medium text-[#a3aed0] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap">
              Profile
            </div>
            <img
              className="w-[24px] h-[24px] top-[6px] absolute left-0"
              alt="Icon"
              src="https://c.animaapp.com/1YWv7WFh/img/icon-1.svg"
            />
          </div>
          <div className="absolute w-[259px] h-[36px] top-[168px] left-[2px]">
            <div className="left-[36px] font-medium text-[#a3aed0] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap">
              Kanban
            </div>
            <img
              className="w-[24px] h-[24px] top-[6px] absolute left-0"
              alt="Icon"
              src="https://c.animaapp.com/1YWv7WFh/img/icon-5.svg"
            />
          </div>
          <div className="absolute w-[261px] h-[36px] top-[112px] left-0">
            <div className="left-[38px] font-medium text-[#a3aed0] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap">
              Tables
            </div>
            <img
              className="w-[28px] h-[28px] top-[4px] absolute left-0"
              alt="Icon"
              src="https://c.animaapp.com/1YWv7WFh/img/icon-4.svg"
            />
          </div>
          <div className="absolute w-[259px] h-[36px] top-[56px] left-[2px]">
            <div className="left-[36px] font-medium text-[#a3aed0] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap">
              NFT Marketplace
            </div>
            <img
              className="w-[24px] h-[24px] top-[6px] absolute left-0"
              alt="Icon"
              src="https://c.animaapp.com/1YWv7WFh/img/icon-3.svg"
            />
          </div>
          <div className="absolute w-[259px] h-[36px] top-0 left-[2px]">
            <div className="left-[36px] font-bold text-[#2b3674] absolute top-[3px] [font-family:'DM_Sans',Helvetica] text-[16px] tracking-[-0.32px] leading-[30px] whitespace-nowrap">
              Dashboard
            </div>
            <img
              className="w-[24px] h-[24px] top-[6px] absolute left-0"
              alt="Icon"
              src="https://c.animaapp.com/1YWv7WFh/img/icon-2.svg"
            />
            <div className="absolute w-[4px] h-[36px] top-0 left-[253px] bg-[#4218ff] rounded-[25px]" />
          </div> */}
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

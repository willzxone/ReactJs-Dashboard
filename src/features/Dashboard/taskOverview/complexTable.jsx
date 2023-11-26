import { complexTableData } from "../../../data/complextable/complexTableData";
import MoreIcon from "../../../assets/Icons/TaskOverview/more_horiz.svg?react";

export const ComplexTable = () => {
  return (
    <div className="flex flex-col gap-8 w-1/2 dark:bg-[#111C44] dark:p-6 dark:rounded-3xl">
      <div className="flex justify-between">
        <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#1b2559] text-[24px] tracking-[0.48px] leading-[24px] whitespace-nowrap dark:text-white">
          Complex Table
        </h3>
        <MoreIcon className="text-[#4318FF] dark:text-white" />
      </div>

      <table className="table-fixed text-start">
        <thead className="text-left">
          <tr className="[font-family:'DM_Sans-Medium',Helvetica] text-[#a3aed0] text-[14px]">
            <th className="font-thin pb-6">NAME</th>
            <th className="font-thin pb-6">STATUS</th>
            <th className="font-thin pb-6">DATE</th>
            <th className="font-thin pb-6">PROGRESS</th>
          </tr>
        </thead>
        <tbody className="[font-family:'DM_Sans-Bold',Helvetica] text-[#2b3674] text-[14px]">
          {complexTableData.map((item, index) => (
            <tr key={index} className="dark:text-white">
              <td className="pb-9 flex items-center [font-family:'DM_Sans-Bold',Helvetica] text-[#2b3674] text-[14px] dark:text-white">
                {item.name}
              </td>
              <td className="pb-9">
                <img className="inline pr-2" src={item.status.icon} />
                {item.status.text}
              </td>
              <td className="pb-9">{item.date}</td>
              <td className="w-[108px] h-[10px] rounded-full overflow-hidden flex">
                {
                  <div className="w-full bg-[#EFF4FB] rounded-full dark:bg-[#ffffff23]">
                    <div
                      className="h-2 bg-[#4318FF] rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

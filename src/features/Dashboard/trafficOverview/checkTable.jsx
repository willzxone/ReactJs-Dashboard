import { checkTableData } from "../../../data/checktable/checkTableData";
import MoreIcon from "../../../assets/Icons/TaskOverview/more_horiz.svg?react";

export const CheckTable = () => {
  return (
    <div className="flex flex-col gap-8 w-1/2 dark:bg-[#111C44] dark:p-6 dark:rounded-3xl">
      <div className="flex justify-between">
        <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#1b2559] text-[24px] tracking-[0.48px] leading-[24px] whitespace-nowrap dark:text-white">
          Check Table
        </h3>
        <MoreIcon className="text-[#4318FF] dark:text-white" />
      </div>
      <table className="table-fixed select-none ">
        <thead className="text-left">
          <tr className="[font-family:'DM_Sans-Medium',Helvetica] text-[#a3aed0] text-[14px]">
            <th className="font-thin pb-6">NAME</th>
            <th className="font-thin pb-6">PROGRESS</th>
            <th className="font-thin pb-6">QUANTITY</th>
            <th className="font-thin pb-6">DATE</th>
          </tr>
        </thead>
        <tbody className="[font-family:'DM_Sans-Bold',Helvetica] font-semibold text-[#2b3674] text-[14px]">
          {checkTableData.map((item, index) => (
            <tr key={index} className="dark:text-white">
              <td className="pb-9 flex items-center [font-family:'DM_Sans-Bold',Helvetica] font-semibold text-[#2b3674] text-[14px]">
                <input
                  id={`${item.name}` + index}
                  name={item.name}
                  type="checkbox"
                  className="accent-[#4318FF] ring-white border-[#A3AED0] outline-cyan-50 mr-2"
                />
                <label
                  className="dark:text-white"
                  htmlFor={`${item.name}` + index}
                >
                  {item.name}
                </label>
              </td>
              <td className="pb-9">
                <label htmlFor={`${item.name}` + index}>
                  {item.progress + "%"}
                </label>
              </td>
              <td className="pb-9">
                <label htmlFor={`${item.name}` + index}>{item.quantity}</label>
              </td>
              <td className="pb-9">
                <label htmlFor={`${item.name}` + index}>{item.date}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

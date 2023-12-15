import { checkTableData } from "../../../data/checktable/checkTableData";
import MoreIcon from "../../../assets/Icons/TaskOverview/more_horiz.svg?react";

export const CheckTable = () => {
  return (
    <div className="flex flex-col gap-8 w-1/2 bg-card dark:p-6 dark:rounded-3xl">
      <div className="flex justify-between">
        <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-primary text-[24px] tracking-[0.48px] leading-[24px] whitespace-nowrap">
          Check Table
        </h3>
        <MoreIcon className="text-primary" />
      </div>
      <table className="table-fixed select-none ">
        <thead className="text-left">
          <tr className="text-secondary text-[14px]">
            <th className="font-thin pb-6">NAME</th>
            <th className="font-thin pb-6">PROGRESS</th>
            <th className="font-thin pb-6">QUANTITY</th>
            <th className="font-thin pb-6">DATE</th>
          </tr>
        </thead>
        <tbody className="font-semibold text-primary text-[14px]">
          {checkTableData.map((item, index) => (
            <tr key={index} className="dark:text-white">
              <td className="pb-9 flex items-center font-semibold text-[14px]">
                <input
                  id={`${item.name}` + index}
                  name={item.name}
                  type="checkbox"
                  className="accent-primary ring-white border-[#A3AED0] outline-cyan-50 mr-2"
                />
                <label
                  className="text-primary"
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

import { checkTableData } from "../../../data/checktable/checkTableData";
export const CheckTable = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#1b2559] text-[24px] tracking-[-0.48px] leading-[24px] whitespace-nowrap">
        Check Table
      </h3>

      <table className="table-fixed w-1/2">
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
            <tr key={index}>
              <td className="pb-4 [font-family:'DM_Sans-Bold',Helvetica] font-semibold text-[#2b3674] text-[14px]">
                <td className="pr-2">
                  <input
                    id={`${item.name}` + index}
                    name={item.name}
                    type="checkbox"
                    className="accent-[#4318FF] ring-white border-[#A3AED0] outline-cyan-50"
                  />
                </td>
                <td>
                  <label htmlFor={`${item.name}` + index}>{item.name}</label>
                </td>
              </td>
              <td className="pb-3">
                <label htmlFor={`${item.name}` + index}>
                  {item.progress + "%"}
                </label>
              </td>
              <td className="pb-3">
                <label htmlFor={`${item.name}` + index}>{item.quantity}</label>
              </td>
              <td className="pb-3">
                <label htmlFor={`${item.name}` + index}>{item.date}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

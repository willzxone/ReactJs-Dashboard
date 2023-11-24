import { complexTableData } from "../../../data/complextable/complexTableData";
export const ComplexTable = () => {
  return (
    <div className="flex flex-col gap-8 w-1/2">
      <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#1b2559] text-[24px] tracking-[-0.48px] leading-[24px] whitespace-nowrap">
        Check Table
      </h3>

      <table className="table-fixed select-none">
        <thead className="text-left">
          <tr className="[font-family:'DM_Sans-Medium',Helvetica] text-[#a3aed0] text-[14px]">
            <th className="font-thin pb-6">NAME</th>
            <th className="font-thin pb-6">STATUS</th>
            <th className="font-thin pb-6">DATE</th>
            <th className="font-thin pb-6">PROGRESS</th>
          </tr>
        </thead>
        <tbody className="[font-family:'DM_Sans-Bold',Helvetica] font-semibold text-[#2b3674] text-[14px]">
          {complexTableData.map((item, index) => (
            <tr key={index}>
              <td className="pb-9 flex items-center [font-family:'DM_Sans-Bold',Helvetica] font-semibold text-[#2b3674] text-[14px]">
                {item.name}
              </td>
              <td className="pb-9">
                <img className="inline pr-2" src={item.status.icon} />
                {item.status.text}
              </td>
              <td className="pb-9">{item.date}</td>
              <td className="w-[108px] h-[6px] pb-9 rounded-full overflow-hidden">
                {
                  <div className="w-full px-2 bg-[#EFF4FB] rounded-full">
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

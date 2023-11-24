import PieChart from "../../../components/Charts/piechart";
import ArrowDown from "../../../assets/Icons/FinancialOverview/arrow_down.svg";
import { filesData } from "../../../data/files/filesData";
import { useState } from "react";

export const FilesChart = () => {
  const intervals = ["Monthly", "Weekly", "Daily"];
  const [selectedIntervalIndex, setSelectedIntervalIndex] = useState(0);
  const [chartData, setChartData] = useState(filesData.monthly);

  const handleIntervalChange = () => {
    const nextIndex = (selectedIntervalIndex + 1) % intervals.length;
    setSelectedIntervalIndex(nextIndex);
    switch (intervals[nextIndex]) {
      case "Daily":
        setChartData(filesData.daily);
        break;
      case "Weekly":
        setChartData(filesData.weekly);
        break;
      case "Monthly":
        setChartData(filesData.monthly);
        break;
    }
  };
  return (
    <div className="ml-10 flex flex-col gap-2 grow-0">
      <div className="flex justify-between items-center">
        <div className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[16px] ">
          Your Pie Chart
        </div>
        <div
          className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#a3aed0] text-[12px] cursor-pointer hover:text-[#2b3674]"
          onClick={handleIntervalChange}
        >
          <p className="inline">{intervals[selectedIntervalIndex]}</p>
          <img className="inline" src={ArrowDown} />
        </div>
      </div>
      <PieChart data={chartData} />
    </div>
  );
};

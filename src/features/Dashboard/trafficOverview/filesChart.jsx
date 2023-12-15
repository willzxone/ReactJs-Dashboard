import PieChart from "../../../components/Charts/piechart";
import ArrowDown from "../../../assets/Icons/FinancialOverview/arrow_down.svg?react";
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
    <div className="flex flex-col gap-2 grow-0 w-1/2 bg-card dark:p-6 dark:rounded-3xl ">
      <div className="flex justify-between items-center">
        <div className="font-bold text-primary text-[16px]">Your Pie Chart</div>
        <div
          className="font-bold text-secondary text-[12px] cursor-pointer hover:text-primary"
          onClick={handleIntervalChange}
        >
          <p className="inline">{intervals[selectedIntervalIndex]}</p>
          <ArrowDown className="inline" />
        </div>
      </div>
      <PieChart data={chartData} />
    </div>
  );
};

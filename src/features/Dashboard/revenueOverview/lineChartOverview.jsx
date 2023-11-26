import LineChart from "../../../components/Charts/linechart";
import CalendarIcon from "../../../assets/Icons/RevenueOverview/calendartoday.svg?react";
import ArrowIcon from "../../../assets/Icons/RevenueOverview/arrowdropup.svg?react";
import TickIcon from "../../../assets/Icons/RevenueOverview/tick.svg?react";
import BarChartIcon from "../../../assets/Icons/RevenueOverview/barchart.svg?react";
import { revenueData } from "../../../data/revenue/revenueData";
import { Card } from "../../../components/card";
import { useState } from "react";
const LineChartOverView = () => {
  const intervals = ["Monthly", "Weekly", "Daily"];
  const [selectedIntervalIndex, setSelectedIntervalIndex] = useState(0);
  const [chartData, setChartData] = useState(revenueData.monthly);

  const handleIntervalChange = () => {
    const nextIndex = (selectedIntervalIndex + 1) % intervals.length;
    setSelectedIntervalIndex(nextIndex);
    switch (intervals[nextIndex]) {
      case "Daily":
        setChartData(revenueData.daily);
        break;
      case "Weekly":
        setChartData(revenueData.weekly);
        break;
      case "Monthly":
        setChartData(revenueData.monthly);
        break;
    }
  };

  return (
    <div className="flex w-1/2 dark:bg-[#111C44] dark:p-6 dark:rounded-3xl">
      <div className="w-1/4 flex flex-col [font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a3aed0] text-[14px] tracking-[0.32px] leading-[28px] whitespace-nowrap">
        <div
          className="flex gap-2 items-center p-2 cursor-pointer hover:text-[#4318FF] hover:font-semibold select-none dark:bg-[#1B254B] dark:px-4 w-fit rounded-lg"
          onClick={handleIntervalChange}
        >
          <CalendarIcon alt="calendaricon" className="dark:text-white" />
          <p className="dark:text-white">{intervals[selectedIntervalIndex]}</p>
        </div>

        <Card
          value={<p className="text-[34px] pb-2 dark:text-white">$37.5K</p>}
          className="mt-[28px]"
          description={
            <>
              Total Spent
              <span className="text-[#05cd99] pl-2">
                <ArrowIcon className="inline" />
                +2.45%
              </span>
            </>
          }
        />
        <div className="mt-5">
          <div className="w-fit bg-[#05cd99] rounded-[46px] overflow-hidden inline-block mr-1">
            <TickIcon className="w-[11px] h-[11px] top-[2px] left-[3px]" />
          </div>
          <div className="font-bold text-[#05cd99] text-[16px] inline-block">
            On track
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <BarChartIcon className="float-right dark:p-2 dark:w-10 dark:h-10 dark:text-white text-[#4318FF]" />
        <LineChart data={chartData} height={200} width={"100%"} />
      </div>
    </div>
  );
};

export default LineChartOverView;

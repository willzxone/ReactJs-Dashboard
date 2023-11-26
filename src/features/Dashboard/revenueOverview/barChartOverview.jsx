import BarChartIcon from "../../../assets/Icons/RevenueOverview/barchart.svg?react";
import BarChartColumn from "../../../components/Charts/barchart";

const BarChartOverView = () => {
  return (
    <div className="w-1/2">
      <div className="flex justify-between items-center">
        <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#1b2559] text-[24px] dark:text-white">
          Weekly Revenue
        </h3>
        <BarChartIcon className="float-right dark:p-2 dark:w-10 dark:h-10 text-[#1b2559] dark:text-white" />
      </div>
      <div>
        <BarChartColumn />
      </div>
    </div>
  );
};

export default BarChartOverView;

import BarChartIcon from "../../../assets/Icons/RevenueOverview/barchart.svg?react";
import BarChartColumn from "../../../components/Charts/barchart";

const BarChartOverView = () => {
  return (
    <div className="w-1/2 bg-card dark:p-6 dark:rounded-3xl">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-primary text-[24px]">Weekly Revenue</h3>
        <BarChartIcon className="float-right dark:p-2 dark:w-10 dark:h-10 text-primary" />
      </div>
      <div>
        <BarChartColumn />
      </div>
    </div>
  );
};

export default BarChartOverView;

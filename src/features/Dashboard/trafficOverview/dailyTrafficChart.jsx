import DailyTraffic from "../../../components/Charts/barchart";
import { dailyTrafficData } from "../../../data/dailytraffic/dailyTrafficData";
import { options } from "../../../components/Charts/barchart/barChartOptions";
import { Card } from "../../../components/card";
import ArrowIcon from "../../../assets/Icons/RevenueOverview/arrowdropup.svg?react";

const DailyTrafficChart = () => {
  const updatedOptions = {
    ...options,
    xaxis: {
      categories: dailyTrafficData.categories,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#4318FF", "#4318FF47"], // Ending color of the gradient
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        horizontal: false,
        borderRadius: 5,
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 90,
    },
    grid: {
      show: false, // Set to false to hide all grid lines
    },
  };

  return (
    <div className="w-1/2 bg-card dark:p-6 dark:rounded-3xl ">
      <div className="flex justify-between ">
        <Card
          heading={"Daily Traffic"}
          className="items-end w-fit "
          value={<p className="text-primary">2.579</p>}
          rightIcon={
            <div className="font-medium text-secondary text-[14px] pb-[6px] ">
              Visitors
            </div>
          }
          rightSubIcon
          rightIconClassName="items-end ml-1 justify-between "
        />
        <div className="font-bold text-[#05cd99] text-[12px] ">
          <ArrowIcon className="inline" />
          +2.45%
        </div>
      </div>
      <DailyTraffic
        data={dailyTrafficData}
        options={updatedOptions}
        height={300}
      />
    </div>
  );
};

export default DailyTrafficChart;

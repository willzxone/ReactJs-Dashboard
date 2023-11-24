import DailyTraffic from "../../../components/Charts/barchart";
import { dailyTrafficData } from "../../../data/dailytraffic/dailyTrafficData";
import { options } from "../../../components/Charts/barchart/barChartOptions";
import { Card } from "../../../components/card";
import ArrowIcon from "../../../assets/Icons/RevenueOverview/arrowdropup.svg";

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
        columnWidth: "20%",
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
    <div className="w-1/2">
      <div className="flex justify-between">
        <Card
          heading={"Daily Traffic"}
          className="ml-10 items-end w-fit"
          value={"2.579"}
          rightIcon={
            <div className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a3aed0] text-[14px] pb-[6px]">
              Visitors
            </div>
          }
          rightSubIcon
          rightIconClassName="items-end ml-1 justify-between "
        />
        <div className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#05cd99] text-[12px] ">
          <img src={ArrowIcon} className="inline" />
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

import barChartIcon from "../../../assets/Icons/RevenueOverview/barchart.svg";
import BarChartColumn from "../../../components/Charts/barchart";

const BarChartOverView = () => {
  return (
    <div className="w-1/2">
      <div className="flex justify-between items-center">
        <h3 className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#1b2559] text-[24px] tracking-[-0.48px] leading-[24px] whitespace-nowrap ml-10">
          Weekly Revenue
        </h3>
        <img src={barChartIcon} className="float-right p-3" />
      </div>
      <div>
        <BarChartColumn />
      </div>
    </div>
  );
};

export default BarChartOverView;

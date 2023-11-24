import BarChartOverView from "./barChartOverview";
import LineChartOverView from "./lineChartOverview";

export const RevenueOverview = () => {
  return (
    <div className="mt-[20px] flex gap-10 grow-0 ">
      <LineChartOverView />
      <BarChartOverView />
    </div>
  );
};

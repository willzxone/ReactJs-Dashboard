import BarChartOverView from "./barChartOverview";
import LineChartOverView from "./lineChartOverview";

export const RevenueOverview = () => {
  return (
    <div className="mt-[20px] flex gap-10">
      <LineChartOverView />
      <BarChartOverView />
    </div>
  );
};

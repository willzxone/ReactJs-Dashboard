import BarChartOverView from "./barChartOverview";
import LineChartOverView from "./lineChartOverview";

export const RevenueOverview = () => {
  return (
    <div className="mt-10 flex gap-10 grow-0 ">
      <LineChartOverView />
      <BarChartOverView />
    </div>
  );
};

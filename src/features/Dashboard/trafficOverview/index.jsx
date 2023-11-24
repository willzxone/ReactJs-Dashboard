import { CheckTable } from "./checkTable";
import DailyTrafficChart from "./dailyTrafficChart";

export const TrafficOverview = () => {
  return (
    <div className="flex mt-10 gap-10">
      <CheckTable />
      <div className="w-1/2 flex">
        <DailyTrafficChart />
        <DailyTrafficChart />
      </div>
    </div>
  );
};

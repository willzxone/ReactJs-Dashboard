import { CheckTable } from "./checkTable";
import DailyTrafficChart from "./dailyTrafficChart";
import { FilesChart } from "./filesChart";

export const TrafficOverview = () => {
  return (
    <div className="flex mt-10 gap-10">
      <CheckTable />
      <div className="w-1/2 flex">
        <DailyTrafficChart />
        <FilesChart />
      </div>
    </div>
  );
};

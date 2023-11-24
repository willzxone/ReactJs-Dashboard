import { CheckTable } from "./checkTable";
import DailyTrafficChart from "./dailyTrafficChart";
import { FilesChart } from "./filesChart";

export const TrafficOverview = () => {
  return (
    <div className="flex mt-10 gap-10 grow-0">
      <CheckTable />
      <div className="flex justify-between w-1/2">
        <DailyTrafficChart />
        <FilesChart />
      </div>
    </div>
  );
};

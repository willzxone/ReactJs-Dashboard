import { Header } from "../../layouts/Header";
import { FinancialOverview } from "./financialOverview";
import { RevenueOverview } from "./revenueOverview";
import TaskOverview from "./taskOverview";
import { TrafficOverview } from "./trafficOverview";
import BusinessOverview from "./businessOverview";
export const Dashboard = () => {
  return (
    <div className="flex flex-col w-[85%] grow-0 dark:bg-[#0B1437] px-10">
      <Header />
      <FinancialOverview />
      <RevenueOverview />
      <TrafficOverview />
      <TaskOverview />
      <BusinessOverview />
    </div>
  );
};

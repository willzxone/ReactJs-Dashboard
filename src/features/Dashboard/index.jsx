import { Header } from "../../layouts/Header";
import { FinancialOverview } from "./financialOverview";
import { RevenueOverview } from "./revenueOverview";
import TaskOverview from "./taskOverview";
import { TrafficOverview } from "./trafficOverview";
import BusinessOverview from "./businessOverview";
export const Dashboard = () => {
  return (
    <div className="flex flex-col w-5/6 grow-0">
      <Header />
      <FinancialOverview />
      <RevenueOverview />
      <TrafficOverview />
      <TaskOverview />
      <BusinessOverview />
    </div>
  );
};

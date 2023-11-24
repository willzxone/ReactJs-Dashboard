import { Header } from "../../layouts/Header";
import { FinancialOverview } from "./financialOverview";
import { RevenueOverview } from "./revenueOverview";
export const Dashboard = () => {
  return (
    <div className="flex flex-col w-5/6 grow-0">
      <Header />
      <FinancialOverview />
      <RevenueOverview />
    </div>
  );
};

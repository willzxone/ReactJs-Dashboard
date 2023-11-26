import RevenueCards from "./revenueCards";
import InfoCards from "./infoCards";
export const FinancialOverview = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-[1.8rem] flex items-center gap-10 dark:gap-3">
        <RevenueCards />
      </div>
      <div className="mt-[1.8rem] flex items-center dark:gap-3 gap-10">
        <InfoCards />
      </div>
    </div>
  );
};

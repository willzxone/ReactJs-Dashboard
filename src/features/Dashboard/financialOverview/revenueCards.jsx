import EarningIcon from "../../../assets/Icons/FinancialOverview/earning.svg?react";
import SpendIcon from "../../../assets/Icons/FinancialOverview/spend.svg?react";
import { Card } from "../../../components/card";

const RevenueCards = () => {
  return (
    <>
      <Card
        heading={<p className="dark:ml-3">Earnings</p>}
        value={<p className="dark:text-white dark:ml-3">$350.4</p>}
        className={
          "p-[20px] dark:py-4 dark:pl-8 dark:pr-16 items-center mr-16 dark:mr-0 dark:bg-[#111C44] rounded-3xl"
        }
        leftIcon={
          <div className="dark:bg-[#1B254B] dark:w-full dark:h-full dark:flex items-center justify-center">
            <EarningIcon className="text-[#4318FF] dark:text-white" />
          </div>
        }
      />
      <Card
        heading={<p className="dark:ml-3">Spend this month</p>}
        value={<p className="dark:text-white dark:ml-3">$642.39</p>}
        className={
          "p-[20] items-center dark:py-4 dark:pl-8 dark:pr-16 dark:bg-[#111C44] rounded-3xl"
        }
        leftIcon={
          <div className="dark:bg-[#1B254B] dark:w-full dark:h-full dark:flex items-center justify-center">
            <SpendIcon className="text-[#4318FF] dark:text-white" />
          </div>
        }
      />
      <Card
        heading={"Sales"}
        value={<p className="dark:text-white">$574.34</p>}
        className={
          "p-[20px] items-center dark:py-2 dark:pl-6 dark:pr-16 dark:bg-[#111C44] rounded-3xl"
        }
        description={
          <>
            <span className="text-[#05cd99]">+25% </span>since last month
          </>
        }
      />
    </>
  );
};

export default RevenueCards;

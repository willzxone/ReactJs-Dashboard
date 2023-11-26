import { Card } from "../../../components/card";
import EarningIcon from "../../../assets/Icons/FinancialOverview/earning.svg?react";
import SpendIcon from "../../../assets/Icons/FinancialOverview/spend.svg?react";
import ArrowDown from "../../../assets/Icons/FinancialOverview/arrow_down.svg?react";
import Ellipse from "../../../assets/Icons/FinancialOverview/Ellipse.svg?react";
import ProjectIcon from "../../../assets/Icons/FinancialOverview/projects.svg?react";
import TaskIcon from "../../../assets/Icons/FinancialOverview/tasks1.svg?react";

export const FinancialOverview = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-[1.8rem] flex items-center gap-10 dark:gap-3">
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
            "p-[20px] items-center dark:py-2 dark:pl-6 dark:pr-20 dark:bg-[#111C44] rounded-3xl"
          }
          description={
            <>
              <span className="text-[#05cd99]">+25% </span>since last month
            </>
          }
        />
      </div>
      <div className="mt-[1.8rem] flex items-center dark:gap-3 gap-10">
        <Card
          className={
            "p-[20px] items-center dark:py-4 dark:pl-8 dark:pr-16 dark:mr-0 dark:bg-[#111C44] rounded-3xl"
          }
          heading={
            <>
              <span className="pr-6">Your balance</span>
            </>
          }
          value={<p className="dark:text-white">$1000</p>}
          rightIcon={<Ellipse />}
          rightIconSecondary={
            <ArrowDown className="text-[#4318FF] dark:text-white" />
          }
        />
        <Card
          className={
            "p-[20px] items-center  dark:py-4 dark:pl-8 dark:pr-16 dark:mr-0 dark:bg-[#111C44] rounded-3xl"
          }
          heading={
            <>
              <span className="pl-3">New Tasks</span>
            </>
          }
          value={<p className="dark:text-white pl-3">154</p>}
          leftIcon={<TaskIcon />}
        />
        <Card
          className={
            "items-center dark:py-4 dark:pl-8 dark:pr-16 dark:mr-0 dark:bg-[#111C44] rounded-3xl"
          }
          heading={"Total Projects"}
          value={<p className="dark:text-white">2935</p>}
          leftIcon={<ProjectIcon className="text-[#4318FF] dark:text-white" />}
        />
      </div>
    </div>
  );
};

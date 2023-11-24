import { Card } from "../../../components/card";
import EarningIcon from "../../../assets/Icons/FinancialOverview/earning.svg";
import SpendIcon from "../../../assets/Icons/FinancialOverview/spend.svg";
import ArrowDown from "../../../assets/Icons/FinancialOverview/arrow_down.svg";
import Ellipse from "../../../assets/Icons/FinancialOverview/Ellipse.svg";
import ProjectIcon from "../../../assets/Icons/FinancialOverview/projects.svg";
import TaskIcon from "../../../assets/Icons/FinancialOverview/tasks1.svg";

export const FinancialOverview = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-[1.8rem] flex items-center gap-10">
        <Card
          heading={"Earnings"}
          value={"$350.4"}
          className={"p-[20px]"}
          leftIcon={
            <>
              <img src={EarningIcon} />
            </>
          }
        />
        <Card
          heading={"Spend this month"}
          value={"$642.39"}
          className={"p-[20px]"}
          leftIcon={
            <>
              <img src={SpendIcon} />
            </>
          }
        />
        <Card
          heading={"Sales"}
          value={"$574.34"}
          className={"p-[20px]"}
          description={
            <>
              <span className="text-[#05cd99]">+25% </span>since last month
            </>
          }
        />
      </div>
      <div className="mt-[1.8rem] flex items-center gap-10">
        <Card
          className={"p-[20px]"}
          heading={
            <>
              <span className="pr-6">Your balance</span>
            </>
          }
          value={"$1,000"}
          rightIcon={<img src={Ellipse} />}
          rightIconSecondary={<img src={ArrowDown} />}
        />
        <Card
          className={"p-[20px]"}
          heading={
            <>
              <span className="pl-3">New Tasks</span>
            </>
          }
          value={<span className="pl-3">154</span>}
          leftIcon={<img src={TaskIcon} />}
        />
        <Card
          className={"ml-10"}
          heading={"Total Projects"}
          value={"2935"}
          leftIcon={<img src={ProjectIcon} />}
        />
      </div>
    </div>
  );
};

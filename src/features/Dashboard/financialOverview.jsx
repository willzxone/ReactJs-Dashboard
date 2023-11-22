import { Card } from "../../components/card";
import EarningIcon from "../../assets/Icons/FinancialOverview/earning.svg";
import SpendIcon from "../../assets/Icons/FinancialOverview/spend.svg";
import ArrowDown from "../../assets/Icons/FinancialOverview/arrow_down.svg";
import Ellipse from "../../assets/Icons/FinancialOverview/Ellipse.svg";
import ProjectIcon from "../../assets/Icons/FinancialOverview/projects.svg";
// import ShadowIcon from "../../assets/Icons/FinancialOverview/Shadow.svg";
import TaskIcon from "../../assets/Icons/FinancialOverview/tasks1.svg";

export const FinancialOverview = () => {
  return (
    <div>
      <div className="mt-[1.8rem] flex items-center ">
        <Card heading={"Earnings"} value={"$350.4"} leftIcon={EarningIcon} />
        <Card
          heading={"Spend this month"}
          value={"$642.39"}
          leftIcon={SpendIcon}
        />
        <Card
          heading={"Sales"}
          value={"$574.34"}
          description={
            <>
              <span className="text-[#05cd99]">+25% </span>since last month
            </>
          }
        />
      </div>
      <Card
        heading={"Your balance"}
        value={"$1,000"}
        rightIcon={Ellipse}
        rightIconSecondary={ArrowDown}
      />
      <Card heading={"New Tasks"} value={"154"} leftIcon={TaskIcon} />
      <Card heading={"Total Projects"} value={"2935"} leftIcon={ProjectIcon} />
    </div>
  );
};

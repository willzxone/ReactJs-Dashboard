import { Card } from "../../../components/card";
import ArrowDown from "../../../assets/Icons/FinancialOverview/arrow_down.svg?react";
import Ellipse from "../../../assets/Icons/FinancialOverview/Ellipse.svg?react";
import ProjectIcon from "../../../assets/Icons/FinancialOverview/projects.svg?react";
import TaskIcon from "../../../assets/Icons/FinancialOverview/tasks1.svg?react";

const InfoCards = () => {
  return (
    <>
      <Card
        className={
          "p-[20px] items-center dark:py-4 dark:pl-8 dark:pr-10 dark:mr-0 dark:bg-[#111C44] rounded-3xl"
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
    </>
  );
};

export default InfoCards;

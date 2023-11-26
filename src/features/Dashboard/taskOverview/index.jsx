import CalendarComp from "./calendar";
import { ComplexTable } from "./complexTable";
import PendingTasks from "./pendingTasks";

const TaskOverview = () => {
  return (
    <div className="mt-10 flex gap-10 ">
      <ComplexTable />
      <div className="flex justify-center w-1/2 gap-10">
        <PendingTasks />
        <CalendarComp />
      </div>
    </div>
  );
};

export default TaskOverview;

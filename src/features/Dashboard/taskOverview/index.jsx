import CalendarComp from "./calendar";
import { ComplexTable } from "./complexTable";
import PendingTasks from "./pendingTasks";

const TaskOverview = () => {
  return (
    <div className="mt-10 flex gap-10 ">
      <ComplexTable />
      <div className="flex gap-10 w-1/2">
        <PendingTasks />
        <CalendarComp />
      </div>
    </div>
  );
};

export default TaskOverview;

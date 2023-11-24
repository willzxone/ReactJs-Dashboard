import { ComplexTable } from "./complexTable";
import PendingTasks from "./pendingTasks";

const TaskOverview = () => {
  return (
    <div className="mt-10 flex gap-10">
      <ComplexTable />
      <div className="flex w-1/2">
        <PendingTasks />
      </div>
    </div>
  );
};

export default TaskOverview;

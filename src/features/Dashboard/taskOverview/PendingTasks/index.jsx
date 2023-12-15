/* eslint-disable react/prop-types */
import { useState } from "react";
import { tasksData } from "../../../../data/tasks/tasksData";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Header from "./header";
import SortableUser from "./sortableUser";

const PendingTasks = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const onCheckboxChange = (taskId) => {
    setCheckedTasks((prevCheckedTasks) => {
      if (prevCheckedTasks.includes(taskId)) {
        return prevCheckedTasks.filter((id) => id !== taskId);
      } else {
        return [...prevCheckedTasks, taskId];
      }
    });
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active !== null && over !== null && active.id === over.id) {
      return;
    }

    if (active !== null && over !== null) {
      setTasks((tasks) => {
        const oldIndex = tasks.findIndex((task) => task === active.id);
        const newIndex = tasks.findIndex((task) => task === over.id);
        return arrayMove(tasks, oldIndex, newIndex);
      });
    }
  };
  return (
    <>
      <div className="w-1/2 p-4 bg-card dark:p-6 dark:rounded-3xl">
        <Header />
        <ul className="mt-9 cursor-pointer">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={tasks}
              strategy={verticalListSortingStrategy}
            >
              {tasks.map((task) => (
                <SortableUser
                  key={task}
                  item={task}
                  isChecked={checkedTasks.includes(task)}
                  onCheckboxChange={onCheckboxChange}
                />
              ))}
            </SortableContext>
          </DndContext>
        </ul>
      </div>
    </>
  );
};

export default PendingTasks;

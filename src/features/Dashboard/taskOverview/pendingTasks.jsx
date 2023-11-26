/* eslint-disable react/prop-types */
import MoreIcon from "../../../assets/Icons/TaskOverview/more_horiz.svg?react";
import DragIcon from "../../../assets/Icons/TaskOverview/drag_indicator.svg";
import { useState } from "react";
import { tasksData } from "../../../data/tasks/tasksData";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableUser = ({ item, isChecked, onCheckboxChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li className="pb-7 flex justify-between items-center" style={style}>
      <div>
        <input
          type="checkbox"
          name={item}
          id={item}
          className="cursor-pointer accent-[#4318FF] ring-white border-[#A3AED0] outline-cyan-50 mr-4 "
          checked={isChecked}
          onChange={() => onCheckboxChange(item)}
        />
        <label
          htmlFor={item}
          className={`[font-family:'DM_Sans-Medium',Helvetica] text-[16px] tracking-[0.48px] leading-[28px] whitespace-nowrap cursor-pointer ${
            isChecked
              ? "text-[#2B3674] dark:text-white dark:font-bold"
              : "text-[#A3AED0] dark:text-white"
          } `}
        >
          {item}
        </label>
      </div>
      <img ref={setNodeRef} {...attributes} {...listeners} src={DragIcon} />
    </li>
  );
};

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
      <div className="w-1/2 p-4 dark:bg-[#111C44] dark:p-6 dark:rounded-3xl">
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Tasks"
              className="inline accent-[#4318FF] ring-white border-[#A3AED0] outline-cyan-50 mr-2"
            />
            <label
              htmlFor="Tasks"
              className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[18px]"
            >
              Tasks
            </label>
          </div>
          <MoreIcon className="text-[#4318FF] dark:text-white" />
        </div>
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

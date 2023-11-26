/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import DragIcon from "../../../../assets/Icons/TaskOverview/drag_indicator.svg";
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

export default SortableUser;

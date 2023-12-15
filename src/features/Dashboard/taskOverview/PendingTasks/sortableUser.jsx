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
          className="cursor-pointer accent-primary ring-white border-secondary outline-cyan-50 mr-4 "
          checked={isChecked}
          onChange={() => onCheckboxChange(item)}
        />
        <label
          htmlFor={item}
          className={`text-[16px] tracking-[0.48px] leading-[28px] whitespace-nowrap cursor-pointer ${
            isChecked ? "text-primary dark:font-bold" : "text-secondary "
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

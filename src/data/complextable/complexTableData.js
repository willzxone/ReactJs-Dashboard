import ApprovedIcon from "../../assets/Icons/TaskOverview/check_circle.svg";
import ErrorIcon from "../../assets/Icons/TaskOverview/error.svg";
import DisabledIcon from "../../assets/Icons/TaskOverview/cancel.svg";

export const complexTableData = [
  {
    name: "Visric PRO",
    status: { icon: ApprovedIcon, text: "Approved" },
    date: "18 Apr 2021",
    progress: 70,
  },
  {
    name: "Visric Free",
    status: { icon: DisabledIcon, text: "Disabled" },
    progress: 49,
    date: "18 Apr 2021",
  },
  {
    name: "Marketplace",
    progress: 90,
    status: { icon: ErrorIcon, text: "Error" },
    date: "20 May 2021",
  },
  {
    name: "Weekly Update",
    progress: 50,
    status: { icon: ApprovedIcon, text: "Approved" },
    date: "12 Jul 2021",
  },
];

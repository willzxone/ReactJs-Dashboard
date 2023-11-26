import { useState } from "react";
import { Card } from "../../../../components/card";
import { membersData } from "../../../../data/members/membersData";
import TaskIcon from "../../../../assets/Icons/BusinessOverview/more.svg?react";
import PlusIcon from "../../../../assets/Icons/BusinessOverview/add_circle.svg?react";
import NewMember from "./newMembers";

const TeamMembers = () => {
  const [members, setMembers] = useState(membersData);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-1/4 dark:bg-[#111C44] dark:p-6 dark:rounded-3xl ">
      <div className="flex justify-between">
        <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[18px] dark:text-white">
          Team members
        </p>
        <PlusIcon
          className="cursor-pointer dark:text-white text-[#4318FF]"
          onClick={() => setShowModal(true)}
        />
      </div>
      <ul className="h-[240px] overflow-y-auto mt-8 ">
        {members.map((member, index) => (
          <li
            className="mb-6 flex justify-between items-center"
            key={member.name + index}
          >
            <Card
              leftIcon={
                <img
                  src={member.img}
                  className="rounded-full w-full h-full object-cover "
                />
              }
              heading={
                <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[16px] tracking-[0.32px] leading-[28px] whitespace-nowrap ml-3 dark:text-white">
                  {member.name}
                </p>
              }
              value={
                <p className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a3aed0] text-[12px] tracking-[0.24px] leading-[10px] whitespace-nowrap ml-3 ">
                  {member.position}
                </p>
              }
            />
            <TaskIcon className="text-[#A3AED0]" />
          </li>
        ))}
      </ul>
      <NewMember
        showModal={showModal}
        setShowModal={setShowModal}
        setMembers={setMembers}
        members={members}
      />
    </div>
  );
};

export default TeamMembers;

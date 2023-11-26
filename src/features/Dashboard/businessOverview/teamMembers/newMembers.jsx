/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./modal";
import CrossIcon from "../../../../assets/Icons/BusinessOverview/cross.svg";
const initialFormData = {
  name: "",
  position: "",
  img: "",
};

const NewMember = ({ showModal, setShowModal, setMembers, members }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers([...members, formData]);
    setFormData(initialFormData);
    setShowModal(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md ">
      <Modal showModal={showModal}>
        <img
          className="background-transparent font-bold text-sm outline-none focus:outline-none self-end p-4 cursor-pointer w-12"
          src={CrossIcon}
          onClick={() => setShowModal(false)}
        />

        <form
          onSubmit={handleSubmit}
          className="text-left w-100 p-10 pt-0 text-[#4318FF] [font-family:'DM_Sans-Bold',Helvetica]  text-[16px] tracking-[0.32px] leading-[28px] whitespace-nowrap "
        >
          <div className="mb-4 dark:text-white">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 text-[#2b3674] border-[#A3AED0] rounded-lg  focus:outline-none focus:border-[#4318FF]"
              required
            />
          </div>
          <div className="mb-4 dark:text-white">
            <label htmlFor="position" className="block mb-2">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2  text-[#2b3674] border-[#A3AED0] rounded-lg  focus:outline-none focus:border-[#4318FF]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profileImage"
              className="block  mb-2 dark:text-white"
            >
              Profile Image URL
            </label>
            <input
              type="text"
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-[#A3AED0]  text-[#2b3674]  rounded-lg focus:outline-none focus:border-[#4318FF]"
              pattern="https?://.*"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#2b3674] text-white px-4 py-2 rounded-lg hover:bg-[#4318FF] focus:outline-none focus:bg-[#4318FF] w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewMember;

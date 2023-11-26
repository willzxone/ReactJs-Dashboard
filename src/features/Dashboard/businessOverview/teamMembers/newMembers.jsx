/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./modal";
import Form from "./form";
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
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </Modal>
    </div>
  );
};

export default NewMember;

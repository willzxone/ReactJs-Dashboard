/* eslint-disable react/prop-types */
const Form = ({ handleSubmit, formData, handleChange }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-left w-100 p-10 pt-0 text-dark [font-family:'DM_Sans-Bold',Helvetica]  text-[16px] tracking-[0.32px] leading-[28px] whitespace-nowrap "
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
          className="w-full px-3 py-2 border-2 text-primary border-[#A3AED0] rounded-lg  focus:outline-none focus:border-dark"
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
          className="w-full px-3 py-2 border-2  text-primary border-secondary rounded-lg  focus:outline-none focus:border-dark"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="profileImage" className="block  mb-2 dark:text-white">
          Profile Image URL
        </label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className="w-full px-3 py-2 border-2 border-[#A3AED0]  text-primary  rounded-lg focus:outline-none focus:border-dark"
          pattern="https?://.*"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-[#2b3674] text-white px-4 py-2 rounded-lg hover:bg-[#4318FF] focus:outline-none focus:bg-dark w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

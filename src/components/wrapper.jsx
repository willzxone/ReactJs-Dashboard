/* eslint-disable react/prop-types */
export const Wrapper = (props) => {
  return (
    <div className="flex w-[100%] h-[100%] dark:bg-[#111C44]">
      {props.children}
    </div>
  );
};

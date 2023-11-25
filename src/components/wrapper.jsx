/* eslint-disable react/prop-types */
export const Wrapper = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div className="flex w-[100%] h-[100%] px-10 gap-10">{props.children}</div>
  );
};

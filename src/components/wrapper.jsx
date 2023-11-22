export const Wrapper = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className="flex w-[100%] h-[100%] px-5">{props.children}</div>;
};

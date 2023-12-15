/* eslint-disable react/prop-types */
export const Card = (props) => {
  let className = props.className
    ? `${props.className} flex grow-0`
    : "flex items-center grow-0";
  let rightIconClassName = props.rightIconClassName
    ? `${props.rightIconClassName} flex grow-0`
    : "flex items-center grow-0";

  return (
    <div className={className}>
      {props.leftIcon && (
        <div className="w-[56px] h-[56px] overflow-hidden rounded-full flex items-center">
          {props.leftIcon}
        </div>
      )}
      <div className="flex flex-col">
        <div className="font-medium text-secondary text-[14px] tracking-[0.28px] leading-[24px] whitespace-nowrap">
          {props.heading}
        </div>
        <div className="font-bold text-primary text-[24px] tracking-[0.48px] leading-[32px] whitespace-nowrap">
          {props.value}
        </div>
        <div className="font-normal text-secondary text-[12px] tracking-[0.24px] leading-[20px] whitespace-nowrap">
          {props.description}
        </div>
      </div>
      {props.rightIcon && (
        <div className={rightIconClassName}>
          <div className="w-[50px]">{props.rightIcon}</div>
          <div>{props.rightIconSecondary}</div>
        </div>
      )}
    </div>
  );
};

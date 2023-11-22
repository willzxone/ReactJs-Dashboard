/* eslint-disable react/prop-types */
export const Card = (props) => {
  return (
    <div className="flex items-center p-[20px] grow-0">
      {props.leftIcon && (
        <div className="w-[56px]">{<img src={props.leftIcon} />}</div>
      )}
      <div className="flex flex-col">
        <div className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a3aed0] text-[14px] tracking-[-0.28px] leading-[24px] whitespace-nowrap">
          {props.heading}
        </div>
        <div className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[24px] tracking-[-0.48px] leading-[32px] whitespace-nowrap">
          {props.value}
        </div>
        <div className="[font-family:'DM_Sans-Regular',Helvetica] font-normal text-[#a3aed0] text-[12px] tracking-[-0.24px] leading-[20px] whitespace-nowrap">
          {props.description}
        </div>
      </div>
      {props.rightIcon && (
        <div className="flex items-center">
          <div className="w-[50px]">
            <img src={props.rightIcon} />
          </div>
          <div>
            {props.rightIconSecondary && <img src={props.rightIconSecondary} />}
          </div>
        </div>
      )}
    </div>
  );
};

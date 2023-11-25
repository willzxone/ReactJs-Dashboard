import FingerIcon from "../../../assets/Icons/BusinessOverview/finger-print.svg";
import { Card } from "../../../components/card";
const ControlCard = () => {
  return (
    <div className="w-1/4">
      <Card
        className="flex-col justify-between h-full"
        leftIcon={<img src={FingerIcon} />}
        heading={
          <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[24px] tracking-[-0.48px] leading-[32px] mb-8">
            Control card security
            <br />
            in-app with a tap
          </p>
        }
        value={
          <p className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a3aed0] text-[14px] tracking-[-0.28px] leading-[24px] whitespace-nowrap mb-10">
            Discover our cards benefits, with one tap.
          </p>
        }
        description={
          <button
            type="submit"
            className=" bg-[#4318FF] px-4 py-2 rounded-lg w-full [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[-0.28px] leading-[24px] whitespace-nowrap"
          >
            Cards
          </button>
        }
      />
    </div>
  );
};

export default ControlCard;

import { Card } from "../../../../components/card";
import StarbucksIcon from "../../../../assets/Icons/BusinessOverview/starbucks.svg";
import WatchIcon from "../../../../assets/Icons/BusinessOverview/watch_later.svg";
import FoodIcom from "../../../../assets/Icons/BusinessOverview/fastfood.svg";
import StarbuckImage from "../../../../assets/Images/BusinessOverview/Image.png";

const ProductInfo = () => {
  return (
    <div className="w-1/4 relative dark:bg-[#111C44] dark:p-6 dark:rounded-3xl">
      <div className="relative w-full h-[185px] overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden h-[185px]">
          {/* Image */}
          <img
            src={StarbuckImage}
            className="rounded-2xl object-cover w-full h-full z-0"
            alt="Description"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-2xl backdrop-filter bg-gradient-to-b to-[#111c44cc] from-[#111c4400] z-10"></div>
        </div>
        <div className="absolute top-2 right-2 p-3 rounded-2xl w-fit backdrop-filter backdrop-blur-50 backdrop-brightness-100 bg-gradient-to-b from-[rgb(88,85,85)] to-[rgb(119,150,168)] z-10 ">
          <img src={WatchIcon} className="z-10" />
        </div>
      </div>
      <Card
        className="flex-col absolute bottom-[0%] left-3 z-20 dark:left-10 dark:bottom-[6%]"
        leftIcon={<img src={StarbucksIcon} />}
        heading={
          <p className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#2b3674] text-[24px] tracking-[0.48px] leading-[32px] mt-6 dark:text-white">
            Starbucks
          </p>
        }
        value={
          <>
            <img src={FoodIcom} className="inline mr-2" />
            <p className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a3aed0] text-[14px] tracking-[0.28px] leading-[24px] whitespace-nowrap inline">
              10% cashback & off
            </p>
          </>
        }
      />
    </div>
  );
};

export default ProductInfo;

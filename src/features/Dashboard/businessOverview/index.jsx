import BusinessDesign from "./businessDesign";
import TeamMembers from "./teamMembers";
import ControlCard from "./controlCard";
import ProductInfo from "./productInfo";
const BusinessOverview = () => {
  return (
    <div className="mt-10 mb-10 flex gap-10">
      <BusinessDesign />
      <TeamMembers />
      <ControlCard />
      <ProductInfo />
    </div>
  );
};

export default BusinessOverview;

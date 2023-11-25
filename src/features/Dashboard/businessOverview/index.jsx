import BusinessDesign from "./businessDesign";
import TeamMembers from "./teamMembers";
import ControlCard from "./controlCard";
const BusinessOverview = () => {
  return (
    <div className="mt-10 mb-10 flex gap-10">
      <BusinessDesign />
      <TeamMembers />
      <ControlCard />
      <BusinessDesign />
    </div>
  );
};

export default BusinessOverview;

import BusinessDesign from "./businessDesign";
import TeamMembers from "./teamMembers";

const BusinessOverview = () => {
  return (
    <div className="mt-10 mb-10 flex gap-10">
      <BusinessDesign />
      <TeamMembers />
      <BusinessDesign />
    </div>
  );
};

export default BusinessOverview;

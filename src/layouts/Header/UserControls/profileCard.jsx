/* eslint-disable react/prop-types */
const ProfileCard = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="absolute top-10 right-0 w-44 bg-[#111C44] rounded-md overflow-hidden shadow-2xl mt-3 [font-family:'DM_Sans-Medium',Helvetica]">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">Waleed Asif</div>
        <p className="text-white">21</p>
        <p className="text-white text-base">BSCS</p>
        <p className="text-white text-base">Web Developer</p>
      </div>
    </div>
  );
};

export default ProfileCard;

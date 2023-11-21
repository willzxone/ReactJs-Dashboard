import { Labels } from "./labels";
import { UserControls } from "./userControls";
export const Header = () => {
  return (
    <header className="relative w-[100%]">
      <div className="absolute top-[56px] w-[100%] flex justify-between items-end">
        <Labels />
        <UserControls />
      </div>
    </header>
  );
};

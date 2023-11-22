import { Labels } from "./labels";
import { UserControls } from "./userControls";
export const Header = () => {
  return (
    <header className="w-[100%] ">
      <div className="mt-12 w-[100%] flex justify-between items-end">
        <Labels />
        <UserControls />
      </div>
    </header>
  );
};

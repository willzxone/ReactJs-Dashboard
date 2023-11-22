import { SideBar } from "./layouts/Sidebar";
import { Wrapper } from "./components/wrapper";
import { Dashboard } from "./features/Dashboard";

function App() {
  return (
    <>
      <Wrapper>
        <SideBar />
        <Dashboard />
      </Wrapper>
    </>
  );
}

export default App;

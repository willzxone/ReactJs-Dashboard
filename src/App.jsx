import { SideBar } from "./layouts/Sidebar";
import { Wrapper } from "./components/wrapper";
import { Header } from "./layouts/Header";

function App() {
  return (
    <>
      <Wrapper>
        <SideBar />
        <Header />
      </Wrapper>
    </>
  );
}

export default App;

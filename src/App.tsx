import { RecoilRoot } from "recoil";
import Router from "./page/Router";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;

import Home from "./pages/Home";
import Splash1 from "./components/Splash1";
import Splash2 from "./components/Splash2";
import Splash3 from "./components/Splash3";
import AndroidLarge1 from "./components/AndroidLarge1";
import {Route, Routes} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
          <Route path={"/"} element={ <Home/> } />
          <Route path={"/AndroidLarge1"} element={ <AndroidLarge1/> } />
          <Route path={"/Splash1"} element={ <Splash1/> } />
          <Route path={"/Splash2"} element={ <Splash2/> } />
          <Route path={"/Splash3"} element={ <Splash3/> } />
      </Routes>
    </div>
  )
}

export default App

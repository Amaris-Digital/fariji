import Home from "./pages/Home";
import Splash1 from "./components/Splash1";
import Splash2 from "./components/Splash2";
import {Route, Routes} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
          <Route path={"/"} element={ <Home/> } />
          <Route path={"/Splash1"} element={ <Splash1/> } />
          <Route path={"/Splash2"} element={ <Splash2/> } />
      </Routes>
    </div>
  )
}

export default App

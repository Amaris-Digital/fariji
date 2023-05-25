import Home from "./pages/Home";
import Splash1 from "./components/Splash1";
import {Route, Routes} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
          <Route path={"/"} element={ <Home/> } />
          <Route path={"/Splash1"} element={ <Splash1/> } />
      </Routes>
    </div>
  )
}

export default App

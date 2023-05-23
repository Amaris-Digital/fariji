import Home from "./pages/Home";
import Registration from "./pages/Registration";
import {Route, Routes} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Registration/>} />
      </Routes>
    </div>
  )
}

export default App

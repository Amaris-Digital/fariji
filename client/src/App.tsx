import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
          <Route path={"/"} element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App

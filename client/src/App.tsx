import Home from "./pages/Home";
import Registration from "./pages/Registration";
import {Route, Routes} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"

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

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import {Route, Routes} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";



// const link = from([
//   new HttpLink({ uri: "http://localhost:3000/graphql" }),
// ]);
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql" ,
  cache: new InMemoryCache(),
});



function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Registration/>} />
      </Routes>
    </ApolloProvider>
  )
}

export default App

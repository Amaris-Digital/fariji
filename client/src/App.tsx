import Home from "./pages/Home";
import Registration from "./pages/Registration";
import {Route, Routes} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql erro ${message}`);
    });
  }
});

const link = from([
 errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphiql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

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

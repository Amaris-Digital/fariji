import Home from "./pages/Home";
import Registration from "./pages/Registration";
import {Route, Routes} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
 errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

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

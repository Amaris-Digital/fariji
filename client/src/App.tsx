import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'

const link = from([new HttpLink({ uri: 'http://localhost:3000/graphql' })])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})



function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={< Login />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App

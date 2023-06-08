import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './utils/config'
import Home from './pages/Home'
import Login from './pages/Login'
import { Registration } from './pages/Registration'

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/registration'} element={<Registration />} />
      </Routes>
    </ApolloProvider>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './utils/config'
import Login from './pages/Login'
import { Registration } from './pages/Registration'
import { Splash } from './pages/splash/Splash'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='*' element={<Splash />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/registration'} element={<Registration />} />
      </Routes>
    </ApolloProvider>
  )
}

export default App

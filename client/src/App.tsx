import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/config';
import { Splash } from './pages/splash/Splash';
import Home from './pages/Home';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="*" element={<Splash/>} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </ApolloProvider>
  );
};
export default App;

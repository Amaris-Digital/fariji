import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Splash} from './pages/splash/Splash';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash/>} />
      </Routes>
    </div>
  );
};

export default App;

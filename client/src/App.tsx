import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AndroidLarge1 from './components/AndroidLarge1';
import Splash1 from './components/Splash1';
import Splash2 from './components/Splash2';
import Splash3 from './components/Splash3';

const App: React.FC = () => {
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [currentSplash, setCurrentSplash] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsAppInstalled = localStorage.getItem('isAppInstalled');
    if (storedIsAppInstalled) {
      setIsAppInstalled(true);
    } else {
      setIsAppInstalled(false);
      setCurrentSplash(1);
      localStorage.setItem('isAppInstalled', 'true');
    }
  }, []);

  const handleNextSplash = () => {
    setCurrentSplash((prevSplash) => prevSplash + 1);
  };

  useEffect(() => {
    if (isAppInstalled) {
      if (currentSplash !== 1) {
        navigate('/android-large1');
      }
    }
  }, [isAppInstalled, currentSplash, navigate]);

  return (
    <div>
      <Routes>
        {!isAppInstalled && currentSplash === 1 && (
          <Route path="/" element={<AndroidLarge1 />} />
        )}

        <Route path="/home" element={<Home />} />
        <Route path="/android-large1" element={<AndroidLarge1 />} />

        {!isAppInstalled && (
          <>
            <Route path="/splash1" element={<Splash1 onNext={handleNextSplash} />} />
            <Route path="/splash2" element={<Splash2 onNext={handleNextSplash} />} />
            <Route path="/splash3" element={<Splash3 onNext={handleNextSplash} />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;

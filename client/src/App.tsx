import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { Splash1, Splash2, Splash3, Splash4  } from './splash/Splash';

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
        navigate('/');
      }
    }
  }, [isAppInstalled, currentSplash, navigate]);

  return (
    <div>
      <Routes>
        {!isAppInstalled && currentSplash === 1 && (
          <Route path="/" element={<Splash1 />} />
        )}

        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Splash1 />} />

        {!isAppInstalled && (
          <>
            <Route path="/splash2" element={<Splash2 onNext={handleNextSplash} />} />
            <Route path="/splash3" element={<Splash3 onNext={handleNextSplash} />} />
            <Route path="/splash4" element={<Splash4 onNext={handleNextSplash} />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;

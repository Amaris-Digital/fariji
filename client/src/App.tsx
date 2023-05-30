import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Splash1, Splash2, Splash3, Splash4 } from './splash/Splash';

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
        <Route path="/" element={<Splash1 />} />

        {!isAppInstalled && (
          <>
            <Route
              path="/splash2"
              element={
                currentSplash === 2 ? (
                  <Splash2 onNext={handleNextSplash} />
                ) : (
                  <Navigate to="/" replace={true} />
                )
              }
            />
            <Route
              path="/splash3"
              element={
                currentSplash === 3 ? (
                  <Splash3 onNext={handleNextSplash} />
                ) : (
                  <Navigate to="/" replace={true} />
                )
              }
            />
            <Route
              path="/splash4"
              element={
                currentSplash === 4 ? (
                  <Splash4 onNext={handleNextSplash} />
                ) : (
                  <Navigate to="/" replace={true} />
                )
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;

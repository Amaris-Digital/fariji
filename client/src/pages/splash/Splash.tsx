import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Splash1Svg from '../../assets/Splash1.svg';
import Splash2Svg from '../../assets/Splash2.svg';
import Splash3Svg from '../../assets/Splash3.svg';
import Splash4Svg from '../../assets/Splash4.svg';
import Fariji from '../../assets/logo.svg'


export interface SplashProps {
    onNext: () => void;
}

export const Splash1: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-[#FF9549] flex items-center justify-center"
    >
      <div
        className="absolute "
      >
        <img 
        src={Splash1Svg} 
        alt="Logo" />

      </div>
    </div>
  );
};

  export const Splash2: React.FC<SplashProps> = ({ onNext }) => {
    const handleNext = () => {
      onNext();
    };

    return (
      <div className="flex w-full h-screen bg-[#FFFFFF]">

        {/* Left side */}
        <div className="hidden sm:flex w-1/2 bg-[#FF9549] justify-center items-center">
          <div className="text-center">
            <img src={Splash2Svg} alt="logo" />
            <div className="flex justify-center mt-6">
              <img src={Fariji} alt="logo" className="h-16" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="sm:w-96  p-6 ">
            <div className="flex flex-row justify-end items-center pt-8 pb-2 gap-2">
              <p 
              className="text-xs font-inter font-normal text-[#252626] md:text-base cursor-pointer"
              onClick={handleNext}
              >
                Skip
              </p>
            </div>
            <div className="flex items-center justify-center sm:hidden">
              <img src={Splash2Svg} alt="image" />
            </div>
  
            <div className="flex flex-col items-center pt-4 pb-8 gap-4">
              <div className="flex flex-col items-center gap-2">
                <h2 className="sm:text-4xl text-[32px] font-fira font-semibold text-center text-[#252626] sm:pt-4">
                  Leave your family in perfect order.
                </h2>
                <p className="text-sm font-inter font-normal text-center text-[#373737] sm:pt-4 sm:pb-2 md:text-base">
                  Empower your loved ones with peace of mind. Let our funeral services ensure every detail is impeccably
                  handled, leaving your family in perfect order.
                </p>
              </div>
              <button
                className="flex items-center justify-center w-full h-10 px-4 text-sm text-white bg-[#2A6476] rounded-lg md:text-base"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
  
      </div>
    );
  };

  export const Splash3: React.FC<SplashProps> = ({ onNext }) => {
    const handleNext = () => {
      onNext();
    };

    return (
      <div className="flex w-full h-screen bg-[#FFFFFF]">

        {/* Left side */}
        <div className="hidden sm:flex w-1/2 bg-[#FF9549] justify-center items-center">
          <div className="text-center">
            <img src={Splash3Svg} alt="logo" />
            <div className="flex justify-center mt-6">
              <img src={Fariji} alt="logo" className="h-16" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="sm:w-96  p-6 ">
            <div className="flex flex-row justify-end items-center pt-8 pb-2 gap-2">
              <p 
              className="text-xs font-inter font-normal text-[#252626] md:text-base cursor-pointer"
              onClick={handleNext}
              >
                Skip
              </p>
            </div>
            <div className="flex items-center justify-center sm:hidden">
              <img src={Splash3Svg} alt="image" />
            </div>
  
            <div className="flex flex-col items-center pt-4 pb-8 gap-4">
              <div className="flex flex-col items-center gap-2">
                <h2 className="sm:text-4xl text-[32px] font-fira font-semibold text-center text-[#252626] sm:pt-4">
                Be remembered in your own words.
                </h2>
                <p className="text-sm font-inter font-normal text-center text-[#373737] sm:pt-4 sm:pb-2 md:text-base">
                Share your authentic self through your own words, leaving behind a lasting tribute that honors your life.
                </p>
              </div>
              <button
                className="flex items-center justify-center w-full h-10 px-4 text-sm text-white bg-[#2A6476] rounded-lg md:text-base"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
  
      </div>
    );
  };

  export const Splash4: React.FC<SplashProps> = ({ onNext }) => {
    const handleNext = () => {
      onNext();
    };

    return (
      <div className="flex w-full h-screen bg-[#FFFFFF]">

        {/* Left side */}
        <div className="hidden sm:flex w-1/2 bg-[#FF9549] justify-center items-center">
          <div className="text-center">
            <img src={Splash4Svg} alt="logo" />
            <div className="flex justify-center mt-6">
              <img src={Fariji} alt="logo" className="h-16" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="sm:w-96  p-6 ">
            <div className="flex flex-row justify-end items-center pt-8 pb-2 gap-2">
              <p 
              className="text-xs font-inter font-normal text-[#252626] md:text-base cursor-pointer"
              onClick={handleNext}
              >
                Skip
              </p>
            </div>
            <div className="flex items-center justify-center sm:hidden">
              <img src={Splash4Svg} alt="image" />
            </div>
  
            <div className="flex flex-col items-center pt-4 pb-8 gap-4">
              <div className="flex flex-col items-center gap-2">
                <h2 className="sm:text-4xl text-[32px] font-fira font-semibold text-center text-[#252626] sm:pt-4">
                Prepare your loved ones in advance.
                </h2>
                <p className="text-sm font-inter font-normal text-center text-[#373737] sm:pt-4 sm:pb-2 md:text-base">
                Planning for the future can be a daunting task, but taking steps to prepare your loved ones in advance can alleviate the burden during challenging times.
                </p>
              </div>
              <button
                className="flex items-center justify-center w-full h-10 px-4 text-sm text-white bg-[#2A6476] rounded-lg md:text-base"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
  
      </div>
    );
  };
  
  export const Splash: React.FC = () => {
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
          navigate(`/splash${currentSplash}`);
        } else {
          const timeout = setTimeout(() => {
            handleNextSplash();
          }, 5000); // 5 seconds
          return () => {
            clearTimeout(timeout);
          };
        }
      }
    }, [isAppInstalled, currentSplash, navigate]);
  
    const renderSplashScreen = () => {
      switch (currentSplash) {
        case 1:
          return <Splash1 />;
        case 2:
          return <Splash2 onNext={handleNextSplash} />;
        case 3:
          return <Splash3 onNext={handleNextSplash} />;
        case 4:
          return <Splash4 onNext={() => {navigate('/login');}} />;
        default:
          return null;
      }
    };
  
    return <div>{renderSplashScreen()}</div>;
  };
  
  
  
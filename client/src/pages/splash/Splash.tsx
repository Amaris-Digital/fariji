import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Splash1Svg from '../../assets/Splash1.svg';
import Splash2Svg from '../../assets/Splash2.svg';
import Splash3Svg from '../../assets/Splash3.svg';
import Splash4Svg from '../../assets/Splash4.svg';


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
      <div className=" w-full h-screen bg-[#FFFFFF] ">
          <div className="flex flex-row justify-end items-center pt-[56px] px-[24px] pb-[16px] gap-[16px] absolute w-[360px] h-[102px] right-0 top-0">
          <p className="w-[30px] h-[21px] font-sans font-normal font-medium text-[14px] leading-[150%] tracking-wide text-[#252626]" style={{ letterSpacing: '0.003em'}}>
          Skip
        </p>
      </div>
      <div className="absolute left-[6.6%] right-[6.95%] top-[16.88%] bottom-[46.12%] w-[311] h-[296] flex items-center justify-center">
      <img 
        src={Splash2Svg} 
        alt="image" />
  
      </div>
        
        <div className="flex flex-col items-center pt-0 px-[24px] pb-[56px] gap-[32px] absolute w-[360px] h-[297px] left-1/2 transform -translate-x-1/2 bottom-0">
          <div className="flex flex-col items-center p-0 gap-[16px] w-[287px] h-[168px]">
            <h2 className="font-heading font-normal font-semibold text-[32px] leading-[125%] text-center text-[#252626] tracking-tighter-lg" style={{ letterSpacing: '-0.022em' }}>
              Leave your family in perfect order.
            </h2>
            <p className=" font-sans font-normal font-medium text-[14px] leading-[150%] text-center tracking-wide text-[#373737]" style={{ letterSpacing: '0.003em' }}>
            Empower your loved ones with peace of mind. Let our funeral services ensure every detail is impeccably handled, leaving your family in perfect order.
            </p>
          </div>
          <button 
          className="flex flex-row justify-center items-center px-[24px] py-[10px] gap-[10px] w-[312px] h-[41px] bg-[#2A6476] rounded-lg"
          onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export const Splash3: React.FC<SplashProps> = ({ onNext }) => {
    const handleNext = () => {
      onNext();
    };
  
    return (
      <div className=" w-full h-screen bg-[#FFFFFF] ">
      <div className="flex flex-row justify-end items-center pt-[56px] px-[24px] pb-[16px] gap-[16px] absolute w-[360px] h-[102px] right-0 top-0">
      <p className="w-[30px] h-[21px] font-sans font-normal font-medium text-[14px] leading-[150%] tracking-wide text-[#252626]" style={{ letterSpacing: '0.003em'}}>
      Skip
    </p>
  </div>
  <div className="absolute left-[6.6%] right-[6.95%] top-[16.88%] bottom-[46.12%] w-[311] h-[296] flex items-center justify-center">
  <img 
    src={Splash3Svg} 
    alt="image" />

  </div>
    
    <div className="flex flex-col items-center pt-0 px-[24px] pb-[56px] gap-[32px] absolute w-[360px] h-[297px] left-1/2 transform -translate-x-1/2 bottom-0">
      <div className="flex flex-col items-center p-0 gap-[16px] w-[287px] h-[168px]">
        <h2 className="font-heading font-normal font-semibold text-[32px] leading-[125%] text-center text-[#252626] tracking-tighter-lg" style={{ letterSpacing: '-0.022em' }}>
        Be remembered in your own words.
        </h2>
        <p className=" font-sans font-normal font-medium text-[14px] leading-[150%] text-center tracking-wide text-[#373737]" style={{ letterSpacing: '0.003em' }}>
        Share your authentic self through your own words, leaving behind a lasting tribute that honors your life.
        </p>
      </div>
      <button 
      className="flex flex-row justify-center items-center px-[24px] py-[10px] gap-[10px] w-[312px] h-[41px] bg-[#2A6476] rounded-lg"
      onClick={handleNext}
      >
        Next
      </button>
    </div>
  </div>
    );
  };

  export const Splash4: React.FC<SplashProps> = ({ onNext }) => {
    const handleNext = () => {
      onNext();
    };
  
    return (
      <div className=" w-full h-screen bg-[#FFFFFF] ">
      <div className="flex flex-row justify-end items-center pt-[56px] px-[24px] pb-[16px] gap-[16px] absolute w-[360px] h-[102px] right-0 top-0">
      <p className="w-[30px] h-[21px] font-sans font-normal font-medium text-[14px] leading-[150%] tracking-wide text-[#252626]" style={{ letterSpacing: '0.003em'}}>
      Skip
    </p>
  </div>
  <div className="absolute left-[6.6%] right-[6.95%] top-[16.88%] bottom-[46.12%] w-[311] h-[296] flex items-center justify-center">
  <img 
    src={Splash4Svg} 
    alt="image" />

  </div>
    
    <div className="flex flex-col items-center pt-0 px-[24px] pb-[56px] gap-[32px] absolute w-[360px] h-[297px] left-1/2 transform -translate-x-1/2 bottom-0">
      <div className="flex flex-col items-center p-0 gap-[16px] w-[287px] h-[168px]">
        <h2 className="font-heading font-normal font-semibold text-[32px] leading-[125%] text-center text-[#252626] tracking-tighter-lg" style={{ letterSpacing: '-0.022em' }}>
        Prepare your loved ones in advance.
        </h2>
        <p className=" font-sans font-normal font-medium text-[14px] leading-[150%] text-center tracking-wide text-[#373737]" style={{ letterSpacing: '0.003em' }}>
        Planning for the future can be a daunting task, but taking steps to prepare your loved ones in advance can alleviate the burden during challenging times.
        </p>
      </div>
      <button 
      className="flex flex-row justify-center items-center px-[24px] py-[10px] gap-[10px] w-[312px] h-[41px] bg-[#2A6476] rounded-lg"
      onClick={handleNext}
      >
        Next
      </button>
    </div>
  </div>
    );
  };

  // export const Splash: React.FC = () => {
  //   const [isAppInstalled, setIsAppInstalled] = useState(false);
  //   const [currentSplash, setCurrentSplash] = useState(1);
  //   const navigate = useNavigate();
  
  //   useEffect(() => {
  //     const storedIsAppInstalled = localStorage.getItem('isAppInstalled');
  //     if (storedIsAppInstalled) {
  //       setIsAppInstalled(true);
  //     } else {
  //       setIsAppInstalled(false);
  //       setCurrentSplash(1);
  //       localStorage.setItem('isAppInstalled', 'true');
  //     }
  //   }, []);
  
  //   const handleNextSplash = () => {
  //     setCurrentSplash((prevSplash) => prevSplash + 1);
  //   };
  
  //   useEffect(() => {
  //     if (isAppInstalled) {
  //       if (currentSplash !== 1) {
  //         navigate(`/splash${currentSplash}`);
  //       } else {
  //         const timeout = setTimeout(() => {
  //           handleNextSplash();
  //         }, 10000); 
  //         return () => {
  //           clearTimeout(timeout);
  //         };
  //       }
  //     }
  //   }, [isAppInstalled, currentSplash, navigate]);
  
  //   return (
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<Splash1 />} />
  //         {!isAppInstalled && (
  //           <>
  //             <Route path="/splash2" element={<Splash2 onNext={handleNextSplash} />} />
  //             <Route path="/splash3" element={<Splash3 onNext={handleNextSplash} />} />
  //             <Route path="/splash4" element={<Splash4 onNext={handleNextSplash} />} />
  //           </>
  //         )}
  //       </Routes>
  //     </div>
  //   );
  // };
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
          }, 10000); // 10 seconds
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
          return <Splash4 onNext={handleNextSplash} />;
        default:
          return null;
      }
    };
  
    return <div>{renderSplashScreen()}</div>;
  };
  
  
  
import React from 'react';

const AndroidLarge1: React.FC = () => {
  return (
    <div
      className="relative w-[360px] h-[800px] bg-[#FF9549]"
    >
      <div
        className="absolute w-[165.74px] h-[52.28px] left-[104px] top-[374px]"
      >
        
        <div className="absolute  left-0 top-[20px]">
        <img
            src="https://myretrobucket.s3.eu-north-1.amazonaws.com/icons8-heart-64.png" 
            alt="Heart Icon"
            className="w-[52px] h-[37.85px]"
          />
        </div>

        {/* Title */}
        <div className="font-heading absolute w-[102.74px] h-[52.28px] left-[63px] top-0 text-[50px] text-white">
          Fariji
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge1;

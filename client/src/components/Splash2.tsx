import React from 'react';

const Splash1: React.FC = () => {
  return (
    <div className=" w-[360px] h-800px] bg-[#FFFFFF] ">
        <div className="flex flex-row justify-end items-center pt-[56px] px-[24px] pb-[16px] gap-[16px] absolute w-[360px] h-[102px] right-0 top-0">
        <p className="w-[30px] h-[21px] font-sans font-normal font-medium text-[14px] leading-[150%] tracking-wide text-[#252626]" style={{ letterSpacing: '0.003em'}}>
        Skip
      </p>
    </div>
    <div className="absolute left-[6.6%] right-[6.95%] top-[16.88%] bottom-[46.12%]">
    <img
        src="https://myretrobucket.s3.eu-north-1.amazonaws.com/F1.JPG"
        alt="Image"
        className="w-[311.22px] h-[296px]"
      />
    </div>
      
      <div className="flex flex-col items-center pt-0 px-[24px] pb-[56px] gap-[32px] absolute w-[360px] h-[297px] left-1/2 transform -translate-x-1/2 bottom-0">
        <div className="flex flex-col items-center p-0 gap-[16px] w-[287px] h-[168px]">
          <h2 className="font-heading font-normal font-semibold text-[32px] leading-[125%] text-center text-[#252626] tracking-tighter-lg" style={{ letterSpacing: '-0.022em' }}>
          Be remembered in your own words.
          </h2>
          <p className=" font-sans font-normal font-medium text-[14px] leading-[150%] text-center tracking-wide text-[#373737]" style={{ letterSpacing: '0.003em' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          </p>
        </div>
        <button className="flex flex-row justify-center items-center px-[24px] py-[10px] gap-[10px] w-[312px] h-[41px] bg-[#2A6476] rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default Splash1;

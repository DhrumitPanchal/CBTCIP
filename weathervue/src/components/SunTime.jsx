/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";

const SunTime = ({ mainData }) => {
  const rise = mainData.sunrise;
  const set = mainData.sunset;

  return (
    <div className="w-[240px] h-[200px] bg-white/20 text-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] ">Sunrise & Sunset</span>
      <div className=" flex flex-col justify-evenly items-start p-2 gap-4 mt-4 h-[76%]">
        <div className="flex items-center gap-3 row">
          <img src={sunrise} alt="sunrise" className="w-[40px]" />
          <span className="text-lg font-medium font-Popin">{rise} AM</span>
        </div>
        <div className="flex items-center gap-3 row">
          <img src={sunset} alt="sunrise" className="w-[40px]" />
          <span className="text-lg font-medium font-Popin">{set} PM</span>
        </div>
      </div>
    </div>
  );
};

export default SunTime;

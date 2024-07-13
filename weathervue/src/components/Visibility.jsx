/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import excellent from "../assets/excellent.png";
import good from "../assets/good.png";
import poor from "../assets/poor.png";
import verypoor from "../assets/verypoor.png";
import dead from "../assets/dead.png";

const Visibility = ({ mainData }) => {
  const vis = mainData.vis;
  let visLevel;

  if (vis >= 10) {
    visLevel = "Excellent";
  } else if (vis < 10 && vis >= 5) {
    visLevel = "Good";
  } else if (vis < 5 && vis >= 2) {
    visLevel = "Moderate";
  } else if (vis < 2 && vis >= 1) {
    visLevel = "Poor";
  } else if (vis < 1 && vis >= 0.5) {
    visLevel = "Very Poor";
  } else if (vis < 0.5) {
    visLevel = "Fog";
  }
  return (
    <div className="w-[240px] h-[200px] bg-white/20 text-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] ">Visibility</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3 relative">
        <h1 className="mt-10 text-5xl font-medium font-Popin">
          {vis}
          <span className="ml-2 text-lg">Km</span>
        </h1>
        <div className="flex items-center w-full gap-3">
          <p className="text-[16px] font-Popin font-medium">{visLevel}</p>
          <img
            src={
              visLevel == "Excellent"
                ? excellent
                : visLevel == "Good"
                ? good
                : visLevel == "Poor"
                ? poor
                : visLevel == "Very Poor"
                ? verypoor
                : visLevel == "Fog"
                ? dead
                : ""
            }
            alt="emoji"
            className="h-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Visibility;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ getSearchData }) => {
  return (
    <div className="flex items-center justify-start w-full h-8 gap-3 py-2 ">
      <CiSearch className="text-2xl font-extrabold text-white" />
      <input
        type="text"
        placeholder="Mumbai"
        onChange={(e) => getSearchData(e.target.value)}
        onClick={(e) => getSearchData(e.target.value)}
        className="border-none outline-none font-Popin text-sm placeholder:font-Popin placeholder:font-normal  placeholder:text-white/30 text-white bg-transparent h-80%"
      />
    </div>
  );
};

export default SearchBar;

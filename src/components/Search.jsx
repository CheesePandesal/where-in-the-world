import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
const Search = () => {
  const [isFilterByRegionSelected, setIsFilterByRegionSelected] =
    useState(false);
  const toggleOption = () => {
    setIsFilterByRegionSelected(!isFilterByRegionSelected);
  };
  return (
    <div className="px-8 lg:px-12 py-12 md:flex md:items-center md:justify-between">
      <div className="relative flex items-center bg-white py-4">
        <div type="submit" className="px-4">
          <IoSearchOutline color="#a7a8a9" size={25} />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          className="px-4 text-gray-500 focus:outline-none active:border-none"
        />
      </div>
      <div className="w-[200px] relative bg-white mt-8 md:mt-0">
        <button
          className="w-full px-[14px] py-[16px] rounded-md shadow-md flex justify-between cursor-pointer"
          onClick={toggleOption}
        >
          <p className="tracking-wider">Filter by Region</p>
          <IoChevronDownOutline />
        </button>
        {isFilterByRegionSelected && (
          <div className="absolute shadow-md top-16 px-[14px] py-[10px] w-full rounded-md bg-white">
            <p className="my-[5px] mx-0">Africa</p>
            <p className="my-[5px] mx-0">Asia</p>
            <p className="my-[5px] mx-0">Europe</p>
            <p className="my-[5px] mx-0">Oceania</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

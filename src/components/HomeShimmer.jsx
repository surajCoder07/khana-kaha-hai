import React from "react";
import Shimmer from "./Shimmer";
import { filters } from "../utils/constants";
import { AiOutlineSearch } from "react-icons/ai";
const HomeShimmer = () => {
  const selectedFilter = "All";

  return (
    <div className=" p-web max-sm:p-mobile">
      <div className="flex my-6 overflow-hidden gap-6">
        <Shimmer
          width={"360px"}
          height={"230px"}
          containerClass={"rounded-xl flex-shrink-0"}
        />
        <Shimmer
          width={"360px"}
          height={"230px"}
          containerClass={"rounded-xl flex-shrink-0"}
        />
        <Shimmer
          width={"360px"}
          height={"230px"}
          containerClass={"rounded-xl flex-shrink-0"}
        />
        <Shimmer
          width={"360px"}
          height={"230px"}
          containerClass={"rounded-xl flex-shrink-0"}
        />
      </div>

      <div className="flex-[1.8]">
        <div className={"flex justify-center mt-4  py-2 gap-2  "}>
          <input
            type="text"
            className="w-[500px]  max-sm:w-full focus:border-primary-green  outline-none border border-black py-1 px-2 rounded-sm"
            placeholder="search here.."
          />
          <div className="flex  justify-center items-center cursor-pointer text-center py-1 w-[50px]  rounded-sm duration-300 bg-primary-green hover:bg-primary-hover ">
            <AiOutlineSearch size={"1.3em"} className="text-white" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap my-4  ">
          {filters?.map((filter, index) => {
            return (
              <button
                key={index}
                className={` capitalize border border-primary-green px-1 max-sm:min-w-0 max-sm:px-2 max-sm:text-xs  min-w-[70px] py-[5px] "+${
                  selectedFilter == filter
                    ? " text-white bg-primary-green hover:bg-primary-hover "
                    : ""
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex gap-5 flex-wrap justify-between">
        {[...Array(10).fill("")].map((e, index) => {
          return (
            <Shimmer
              key={index}
              width={"280px"}
              height={"320px"}
              containerClass={"rounded-md"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeShimmer;

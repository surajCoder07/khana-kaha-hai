import React, { useEffect, useState } from "react";
import useFetchDataFromAPI from "../utils/useFetchDataFromAPI";
import ImageGridCard from "../components/ImageGridCard";
import {AiOutlineSearch} from "react-icons/ai"

const Body = () => {
  const [searchQuery , setSearchQuery] = useState("")
  
    const [fetchedData,isDataFetched,error]  = useFetchDataFromAPI("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
  console.log(fetchedData);

  
  return(isDataFetched? <div className="overflow-hidden p-web max-sm:p-mobile">
    <ImageGridCard cards={fetchedData?.cards[0]?.card?.card?.imageGridCards?.info} heading={"Best offers for you"}/>
    <div className=" flex justify-center my-4 py-2 gap-2">
      <input type="text"
        className="w-[400px] outline-none border border-black py-1 px-2 rounded-sm"
        placeholder="search here.."
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center items-center cursor-pointer text-center py-1 w-[50px]  rounded-sm duration-300 bg-primary-green hover:bg-primary-hover ">

      <AiOutlineSearch size={"1.3em"} className="text-white"/>
        </div>
    </div>
  </div> 
  :
   <span>loading</span> )
};

export default Body;

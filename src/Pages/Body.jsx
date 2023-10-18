import React, { useEffect, useState } from "react";
import ImageGridCard from "../components/ImageGridCard";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { filters } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants,temp } from "../utils/constants";


const Body = () => {
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([])
  const [offersCards, setOffersCard] = useState([]);
  const [isDataFetched , setIsDataFetched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const[notFound , setNotFound] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [show, setShow] = useState("");

 



// fixed search bar 


  useEffect(() => {
    window.addEventListener("scroll", controllSearchBar);
    return () => {
      window.removeEventListener("scroll", controllSearchBar);
    };
  }, [window.scrollY]);

  const controllSearchBar = () => {
    if (window.scrollY > 350) {
      setShow("top");
    } else {
      setShow("");
    }
  };


  useEffect(()=>{
  fetchData();
  },[])

  useEffect(()=>{
  filterRestaurants();
  },[selectedFilter])


  // fetch data 

  const fetchData = async ()=>{

      const res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

      setIsDataFetched(res.ok)
      
      const data = await res.json();


      setAllRestaurants(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ?
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
        : restaurants
        )

        setFilteredRestaurants(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          ?
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
          : restaurants
          )


        setOffersCard(
          data?.data.cards[0].card.card.gridElements.infoWithStyle.info
          ?
          data?.data.cards[0].card.card.gridElements.infoWithStyle.info
          :
          temp?.data.cards[0].card.card.gridElements.infoWithStyle.info
          
          )



  }

  const filterRestaurants = ()=>{

    if(selectedFilter==="All"){
      setFilteredRestaurants(allRestaurants)
      return;
    }
    const filteredData = allRestaurants?.filter((res)=>{
      
      const firstLetter =selectedFilter.slice(0,1).toUpperCase();
      
      const restLetters = selectedFilter.slice(1,selectedFilter.length);

      const filter = firstLetter+restLetters

      const tempData = res.info.cuisines.includes(filter)
      
      return tempData;
    })
    console.log(filteredData);
    setFilteredRestaurants(filteredData)
   


  }

  const searchForRestaurant = (query)=>{

    const tempData = allRestaurants?.filter((res)=>{
      return res.info.name.toLowerCase().includes(query.toLowerCase());
    })

      setFilteredRestaurants(tempData)

  }
 









  return isDataFetched ? (
    <div className=" overflow-hidden p-web max-sm:p-mobile">


      {/* new offers carousel  */}


      <ImageGridCard
        cards={offersCards}
        heading={"Best offers for you"}
      />



      {/* search & filter  */}



      <div className={show}>

      <div className="flex items-baseline justify-center">
      
      <Link to={"/"} className="flex-[0.2]  flex-col text-center scroll-logo  " >
        <h1 className="text-primary-green font-semibold text-2xl">Khana</h1>
        <p className="text-primary-green  text-xl">Kaha hai</p>
      </Link>


        {/* search bar */}

        <div className="flex-[1.8]">
        <div className={"flex justify-center mt-4  py-2 gap-2  "}>
          <input
            type="text"
            className="w-[500px]  max-sm:w-full focus:border-primary-green  outline-none border border-black py-1 px-2 rounded-sm"
            placeholder="search here.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div
          onClick={()=>searchForRestaurant(searchQuery)}
           className="flex  justify-center items-center cursor-pointer text-center py-1 w-[50px]  rounded-sm duration-300 bg-primary-green hover:bg-primary-hover ">
            <AiOutlineSearch size={"1.3em"} className="text-white" />
          </div>
          </div>
        


        {/* filters  */}


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
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
          
        </div>
        </div>
        </div>
        
      </div>



      {/* restaurant cards  */}



      <div className="flex gap-5 flex-wrap justify-between">
        {
          filteredRestaurants?.map((res,index) => {
            

          return <RestaurantCard key={index} card={res?.info} />;
        })}
       
      </div>
    </div>
  ) : (
    <span>loading</span>
  );
};

export default Body;

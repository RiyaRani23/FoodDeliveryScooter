import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() => {
    const navigate = useNavigate();
    // local state variable - super powerful
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    useEffect (() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3492917&lng=85.33476499999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //Optional Chaining
        setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-5">
                <h1 className="text-2xl font-bold text-red-600">Offline Connection ❌</h1>
                <p className="text-gray-600 mt-2">Check your internet and try again.</p>
            </div>
        );

    return listOfRestaurants.length === 0 ? < Shimmer /> : (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
     <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="flex w-full md:w-auto items-center gap-2">
          <input
           type="text"
           placeholder="Search for restaurants..."
           className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
           focus:ring-green-500 transition-all"
           value={searchText}
           onChange={(e) =>{
            setSearchText(e.target.value);
           }}
           />
           <button 
           className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600
           transition-colors shadow-sm"
            onClick= {() => {
                //Filter the restaurant card and update UI
                //search text
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
            }}>
                Search
            </button>
        </div>
     <button 
     className="w-full md:w-auto px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg
      hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-sm"
      onClick={() => {
       const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.0
       );
       setListOfRestaurants(filteredList);
      }}
      >
        ⭐ Top Rated Restaurants
    </button>
    </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredList.map((restaurant) => {
           const { id } = restaurant.info;
           return (
            <Link 
            key={id} 
            to={"/restaurants/" + id} 
            style={{ textDecoration: 'none', color: 'inherit' }}
           >
            <RestaurantCard resData={restaurant} />
      </Link>
    );
  })}
</div>
    </div>
  );
};
export default Body;


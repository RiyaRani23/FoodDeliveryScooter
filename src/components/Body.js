import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() => {
    const navigate = useNavigate();
    // local state variable - super powerful
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect (() => {
        fetchData();
    } , []);

   const fetchData = async () => {
  try {
    const response = await fetch(
  "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.34410&lng=85.30950")
);

    if (!response.ok) {
      console.error("❌ API Error:", response.status);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
      return;
    }

    const json = await response.json();

    const cards = json?.data?.cards;
    if (!cards || !Array.isArray(cards)) {
      console.error("❌ Unexpected JSON structure", json);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
      return;
    }

    const allCardsWithRestaurants = cards.filter(
      (c) =>
        c?.card?.card?.gridElements?.infoWithStyle?.restaurants &&
        Array.isArray(
          c.card.card.gridElements.infoWithStyle.restaurants
        )
    );

    let combinedList = [];

    allCardsWithRestaurants.forEach((card) => {
      const resList =
        card.card.card.gridElements.infoWithStyle
          .restaurants;
      combinedList = [...combinedList, ...resList];
    });

    const uniqueRestaurants = Array.from(
      new Map(combinedList.map((r) => [r.info.id, r])).values()
    );

    setListOfRestaurants(uniqueRestaurants);
    setFilteredRestaurant(uniqueRestaurants);
  } catch (error) {
    setListOfRestaurants([]);
    setFilteredRestaurant([]);
  }
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
       setFilteredRestaurant(filteredList);
      }}
      >
        ⭐ Top Rated Restaurants
    </button>
    </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredRestaurant.map((restaurant) => {
           const { id } = restaurant.info;
           return (
            <Link 
            key={id} 
            to={"/restaurants/" + id} 
           >
            {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
            ) : ( <RestaurantCard resData={restaurant} />
            )}
      </Link>
    );
  })}
</div>
    </div>
  );
};
export default Body;


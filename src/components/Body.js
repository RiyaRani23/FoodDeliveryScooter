import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body =() => {
    
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

    return listOfRestaurants.length === 0 ? < Shimmer /> : (
    <div className="body">
     <div className="filter">
        <div className="search">
          <input
           type="text"
           className="search-box"
           value={searchText}
           onChange={(e) =>{
            setSearchText(e.target.value);
           }}
           />
           <button 
            onClick= {() => {
                //Filter the restaurant card and update UI
                //search text
                console.log(searchText);
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
            }}>
                Search
            </button>
        </div>
     <button 
     className="filter-btn"
      onClick={() => {
       const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.0
       );
       setListOfRestaurants(filteredList);
      }}
      >
        Top Rated Restaurants
    </button>
    </div>
     <div className="res-container">
        {filteredList.map((restaurant) => {
           const { id } = restaurant.info;
           return (
            <RestaurantCard
             key={id}
             resData={restaurant}
             onClick={() => navigate(`/restaurants/${id}`)}
             />

           );
        })}
      </div>
    </div>
  );
};

export default Body;


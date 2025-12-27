import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body =() => {
    // local state variable - super powerful
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
    };
    //Conditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
     <div className="filter">
     <button 
     className="filter-btn"
      onClick={() => {
       const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.5
       );
       setListOfRestaurants(filteredList);
      }}
      >
        Top Rated Restaurants
    </button>
    </div>
     <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant}
  />
      ))}
      
      </div>
    </div>
  );
};

export default Body;


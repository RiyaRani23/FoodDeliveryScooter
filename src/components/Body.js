import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body =() => {
    // local state variable - super powerful
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect (() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=The%20Potbelly&trackingId=ac5f3de9-7344-d719-8753-97ef45e10a29&submitAction=ENTER&queryUniqueId=00171c40-5f1c-7af9-01fe-0a7be9fa3fdf"
        );

        const json = await data.json();
        console.log(json);
    };

    return (
    <div className="body">
     <div className="filter">
     <button 
     className="filter-btn"
      onClick={() => {
       const filteredList = listOfRestaurants.filter(
        (res) => res.card.card.info.avgRating > 4.5
       );
       setListOfRestaurants(filteredList);
      }}
      >
        Top Rated Restaurants
    </button>
    </div>
     <div className="res-container">
       { listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.card.card.info.id} 
           resData={restaurant}
  />
      ))}
      </div>
    </div>
  );
};

export default Body;


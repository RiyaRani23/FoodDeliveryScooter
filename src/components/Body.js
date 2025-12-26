import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body =() => {
    return (
    <div className="body">
     <button className="filter-btn" onClick={() => {
        console.log("Button Clicked");
      }}
      >
        Top Rated Restaurants</button>
     <div className="res-container">
       {
        resList.map((restaurant) => (
          <RestaurantCard
           key={restaurant.card.card.info.id} 
           resData={restaurant}
  />
))
}
     </div>
   </div>)
}

export default Body;


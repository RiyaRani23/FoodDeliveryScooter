import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/proxy");

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Full API Response Received:", json);

      // Handle the "Oops" error from Swiggy's internal logic
      if (json?.statusCode === 1) {
        console.error("Swiggy API blocked the request:", json?.statusMessage);
        return;
      }

      // Step 1: Identify the cards array
      const cards = json?.data?.cards || [];

      // Step 2: Extract all restaurants from any card that contains them
      // Swiggy often puts them in different cards (Top Brands vs Main List)
      let combinedList = [];

      cards.forEach((c) => {
        const resList = c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(resList)) {
          combinedList = [...combinedList, ...resList];
        }
      });

      // Step 3: Remove duplicates (using the restaurant ID)
      // This is crucial because Swiggy often sends the same restaurant in different widgets
      const uniqueRestaurants = Array.from(
        new Map(combinedList.map((r) => [r?.info?.id, r])).values()
      );

      if (uniqueRestaurants.length === 0) {
        console.warn("No restaurants found in the current API response.");
      }

      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurant(uniqueRestaurants);
    } catch (error) {
      console.error("❌ Fetch Data Error:", error);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-5">
        <h1 className="text-2xl font-bold text-red-600">Offline Connection ❌</h1>
        <p className="text-gray-600 mt-2">Check your internet and try again.</p>
      </div>
    );
  }

  // Show Shimmer while loading, or an error message if no restaurants found after loading
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="flex w-full md:w-auto items-center gap-2">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 transition-all"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors shadow-sm"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="w-full md:w-auto px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-sm"
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

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
            className="hover:scale-95 transition-transform"
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
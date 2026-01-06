import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Grocery = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1395730&primaryStoreId=1395730&secondaryStoreId=&clientId=INSTAMART-APP"
      );
      const json = await data.json();
      
      const categories = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.items;
      setCategoryList(categories || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Show shimmer while data is loading
  if (categoryList.length === 0) return <Shimmer />;

  return (
    <div className="bg-[#f0f9f4] min-h-screen pb-20">
      <div className="bg-white px-8 py-12 mb-10 shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">
            Welcome to <span className="text-green-600">Food Scooter</span> 
            <span className="text-orange-500"> Instamart</span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg font-medium">
            Fresh groceries, daily essentials, and more delivered in minutes! 🛵
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {categoryList.map((item) => {
            const variation = item?.variations?.[0];
            const imageId = variation?.imageIds?.[0];
            const price = variation?.price?.offerPrice?.units;

            return (
              <div 
                key={variation?.skuId || item?.productId} 
                className="flex flex-col bg-white rounded-[2.5rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 border border-white
                 hover:border-green-200 group"
              >
                <div className="relative aspect-square bg-[#f9fbf9] rounded-[2rem] overflow-hidden mb-6">
                  <img
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    src={CDN_URL + imageId}
                    alt={item?.displayName}
                  />
                </div>

                <div className="flex-grow px-1">
                  <h3 className="font-bold text-gray-800 text-xl leading-snug line-clamp-2 h-14">
                    {item?.displayName}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                      {variation?.quantityDescription}
                    </p>
                    <p className="text-green-700 font-black text-lg">
                      ₹{price}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-green-600 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-100">
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
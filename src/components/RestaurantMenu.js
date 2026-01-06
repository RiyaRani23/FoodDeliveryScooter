import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0); // Track which category is open

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, sla } = resInfo;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      {/* Mapping through categories using the new component */}
      {resMenu?.map((category, index) => (
        <RestaurantCategory
          key={category.categoryId}
          data={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
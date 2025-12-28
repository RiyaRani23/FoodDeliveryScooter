import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    areaName,
  } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>

      <p>
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      <p>
        ⭐ {avgRating} • {sla?.slaString} • {areaName}
      </p>

      <h2>Menu</h2>

      {resMenu?.map((category, index) => (
        <div key={category.categoryId}>
          <h3>{category.title}</h3>

          <ul>
            {category.itemCards?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - ₹
                {(item.card.info.price ||
                  item.card.info.defaultPrice) / 100}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

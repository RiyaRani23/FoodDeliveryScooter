import { useEffect, useState } from "react";
import swiggyAPI from "./swiggy.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    // 1️⃣ Get Restaurant Info
    const restaurantInfo =
      swiggyAPI?.data?.cards
        ?.find(
          (item) =>
            item?.card?.card?.["@type"]?.includes(
              "food.v2.Restaurant"
            )
        )
        ?.card?.card?.info;

    // 2️⃣ Get Menu Categories
    const menuData =
      swiggyAPI?.data?.cards
        ?.find((obj) => obj?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.filter(
          (obj) =>
            obj?.card?.card?.["@type"]?.includes("ItemCategory")
        );

    // 3️⃣ Organize Menu Data
    const organizedMenuData = menuData?.map((item) => ({
      categoryId: item?.card?.card?.categoryId,
      title: item?.card?.card?.title,
      type: item?.card?.card?.["@type"],
      itemCards: item?.card?.card?.itemCards || [],
    }));

    setResInfo(restaurantInfo);
    setResMenu(organizedMenuData || []);
  }, [resId]);

  return { resInfo, resMenu };
};

export default useRestaurantMenu;

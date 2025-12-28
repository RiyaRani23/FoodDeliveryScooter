import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // const [resInfo , setResInfo] = useState(null);

    // useEffect(() => {
    //   fetchMenu();
    // } , []);

    // const fetchMenu = async () => {
    //     const data = await fetch (
    //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3492917&lng=85.33476499999999&restaurantId=81230&catalog_qa=undefined&submitAction=ENTER"
    //     );
    //     const json = await data.json();

    //     console.log(json);
    //     setResInfo(json.data);
    // };

    // if (resInfo === null) return <Shimmer/>;

    // const { name, cuisines, costForTwoMessage } = 
    //   resInfo?.card?.card?.info;

    


    // return (
    //     <div className="menu">
    //         <h1>{name}</h1>
    //         <p>
    //             {cuisines.join(",")} - {costForTwoMessage}
    //         </p>
    //         <h2>Menu</h2>
    //         <ul>
    //             {itemCards.map((item) => (
    //                 <li>
    //                     {item.card.info.name} -{"Rs."}
    //                     {item.card.info.price/100 || item.card.info.defaultPrice/100 }
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    useEffect(() => {
       fetchMenu();
     } , []);

     const fetchMenu = async () => {
        const data = await fetch (
          "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3492917&lng=85.33476499999999&restaurantId=81230&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        console.log(json);
     };
    
   return (<div>
        <h1>KFC</h1>
    </div>);
};

export default RestaurantMenu;
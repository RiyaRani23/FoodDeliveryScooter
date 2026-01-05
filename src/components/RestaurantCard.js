import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: { deliveryTime },
    } = resData?.info;

    return (
        <div className="m-4 p-4 w-full rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer flex flex-col h-full">
            <img 
            className="rounded-xl w-full h-40 object-cover"
             src={CDN_URL + resData.info.cloudinaryImageId}
             alt="Res-Logo" />
             <div className="mt-3 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        
        <p className="text-gray-500 text-sm mt-1 line-clamp-2 italic">
          {cuisines.join(", ")}
        </p>

        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-300">
          <span className={`px-2 py-1 rounded-md text-white text-xs font-bold ${
            avgRating >= 4 ? "bg-green-600" : "bg-orange-500"
          }`}>
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600 text-xs font-semibold uppercase">
            {deliveryTime} mins
          </span>
        </div>

        <h4 className="text-gray-700 text-sm font-medium mt-2">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

//Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className=" absolute bg-green-500 text-black">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;

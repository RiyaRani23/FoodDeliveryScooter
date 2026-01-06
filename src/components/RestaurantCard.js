import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    /* Added 'group' for hover effects and matched Grocery card styling */
    <div className="m-4 p-6 w-[350px] rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 border border-white 
        hover:border-green-200 group cursor-pointer flex flex-col h-full">
      
      {/* Image Section with Scale Effect */}
      <div className="relative aspect-square bg-[#f9fbf9] rounded-[2rem] overflow-hidden mb-6">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={CDN_URL + cloudinaryImageId}
          alt="Res-Logo"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-xl 
        text-[10px] font-black shadow-sm border border-gray-100">
          ⏱️ {deliveryTime} MINS
        </div>
      </div>

      {/* Text Info */}
      <div className="flex-grow px-1">
        <h3 className="font-bold text-gray-800 text-xl leading-snug truncate">
          {name}
        </h3>
        <p className="text-gray-400 text-sm font-medium mt-2 line-clamp-2">
          {cuisines.join(", ")}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className={`px-3 py-1 rounded-lg text-white text-xs font-black ${
          avgRating >= 4 ? "bg-green-600" : "bg-orange-500"
        }`}>
          ⭐ {avgRating}
        </span>
        <h4 className="text-gray-700 text-sm font-black uppercase tracking-tight">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

// Higher Order Component with styled Promoted label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative group">
        <label className="absolute top-6 left-10 z-10 bg-black text-white px-4 py-1 rounded-lg text-xs font-bold shadow-md">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
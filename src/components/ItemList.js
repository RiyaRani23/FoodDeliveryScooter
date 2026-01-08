import { CDN_URL } from "../utils/constant"; 
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // Dispatches the action
  };

  return (
    <div className="px-4 pb-2">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 border-b border-gray-100 flex justify-between items-center last:border-b-0"
        >
          {/* Item Details */}
          <div className="w-9/12 text-left pr-4">
            <div className="flex flex-col mb-2">
              <span className="text-gray-700 font-bold text-base">
                {item.card.info.name}
              </span>
              <span className="text-gray-900 font-medium text-sm">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </span>
              <div className="flex items-center gap-2 mt-3">
                        {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                           <span className="text-[10px] border border-red-500 text-red-500 px-1 rounded">NON-VEG</span>
                        ) : (
                           <span className="text-[10px] border border-green-500 text-green-500 px-1 rounded">VEG</span>
                        )}
                      </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
              {item.card.info.description}
            </p>
          </div>

          {/* Item Image & Add Button */}
          <div className="w-3/12 relative flex flex-col items-center">
            {item.card.info.imageId ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-32 h-28 object-cover rounded-2xl shadow-sm"
                alt={item.card.info.name}
              />
            ) : (
              <div className="w-32 h-28 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300 text-xs">
                No Image
              </div>
            )}
            <button className="absolute -bottom-2 bg-white text-green-500 font-extrabold 
            px-8 py-2 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:bg-green-400
             hover:text-white transition-all active:scale-90 uppercase text-xs tracking-wide"
             onClick={() => handleAddItem(item)}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
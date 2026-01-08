import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-3xl font-black text-gray-800">My Cart 🧺</h1>
            <p className="text-gray-400 text-sm mt-1">{cartItems.length} Items saved to your scooter</p>
          </div>
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="px-5 py-2 border-2 border-red-500 text-red-500 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Empty Cart Logic */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" 
              alt="Empty Cart" 
              className="w-64 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-700 italic">"Your scooter is empty!"</h2>
            <p className="text-gray-400 mt-2 mb-8">Fuel up with some delicious food from different Restaurant.</p>
            <Link to="/">
              <button className="bg-[#00c853] text-white px-10 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-green-200">
                START ORDERING
              </button>
            </Link>
          </div>
        ) : (
          /* Cart List Section */
          <div className="space-y-4">
            {cartItems.map((item, index) => {
              const info = item?.card?.info || item?.card?.card?.info;
              const dishInfo = item?.dish?.info || item?.info;
              
              const finalData = dishInfo || info;
              
              const rawPrice = finalData?.price || finalData?.defaultPrice || finalData?.costForTwo || 0;
              const price = typeof rawPrice === "string" ? parseInt(rawPrice) / 100 : rawPrice / 100;

              return (
                <div 
                  key={finalData?.id || index} 
                  className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-transparent hover:border-green-400 transition-all group"
                >
                  <div className="flex items-center gap-6 w-10/12">

                    <img 
                      src={finalData?.imageId || finalData?.cloudinaryImageId
                        ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/" + (finalData?.imageId || finalData?.cloudinaryImageId)
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} 
                      alt={finalData?.name}
                      className="w-24 h-24 object-cover rounded-2xl shadow-md"
                    />

                    <div className="text-left">
                      <h3 className="font-extrabold text-gray-800 text-lg group-hover:text-green-600 transition-colors">
                        {finalData?.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-1 italic">
                        {finalData?.description || finalData?.cuisines?.join(", ")}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-[#00c853] font-black text-xl">₹{price}</span>
                        {finalData?.itemAttribute?.vegClassifier === "NONVEG" ? (
                           <span className="text-[10px] border border-red-500 text-red-500 px-1 rounded">NON-VEG</span>
                        ) : (
                           <span className="text-[10px] border border-green-500 text-green-500 px-1 rounded">VEG</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => dispatch(removeItem())}
                    className="p-4 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                  >
                    🗑️
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
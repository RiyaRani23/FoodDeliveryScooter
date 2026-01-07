import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import  useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact ] = useState("Login");
    
    const { loggedInUser , setUserName } = useContext(UserContext);
    const navigate = useNavigate();

    const onlineStatus = useOnlineStatus();

    const handleAuthClick = () => {
        if (loggedInUser === "Guest User" || !loggedInUser) {
            // If not logged in, go to login page
            navigate("/login");
        } else {
            // If logged in, performing "Logout" logic
            setUserName("Guest User");
        }
    };

    return(
        <div className="flex justify-between items-center bg-gray-50 shadow-md sticky top-0 z-50 px-8 py-2">
            <div className="flex items-center">
                  <img className="w-24 transition-transform hover:scale-125" 
                  src={LOGO_URL} alt = "Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center gap-6 font-medium text-gray-700">
                    <li className="text-sm">
                        Online Status: { onlineStatus ? "✅" : "❌" }
                    </li>
                    <li className="hover:text-green-600 transition-colors">
                        <Link to="/">Home</Link>
                  </li>
                    <li className="hover:text-green-600 transition-colors">
                     <Link to="/about">About Us</Link>
                    </li>
                    <li className="hover:text-green-600 transition-colors">
                     <Link to="/contact">Contact Us</Link>
                     </li>
                     <li className="hover:text-green-600 transition-colors">
                     <Link to="/grocery">Grocery</Link>
                     </li>
                    <li className=" relative cursor-pointer hover:text-green-600 transition-colors">Cart 🛒</li>   
                    <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold
                     hover:text-green-600 transition-all active:scale-95 shadow-md "
                    onClick={handleAuthClick}
                    > 
                        {loggedInUser === "Guest User" || !loggedInUser ? "Login" : "Logout"}
                    </button>

                    {/* Simplified Name Display (No SVG) */}
                    {loggedInUser !== "Guest User" && (
                        <li className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-lg border border-gray-200">
                            <span className="text-lg">👤</span>
                            <span className="text-gray-800 font-bold uppercase tracking-tight text-sm">
                                {loggedInUser}
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
  );
};

export default Header;
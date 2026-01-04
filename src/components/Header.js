import { LOGO_URL } from "../utils/constant";
import { useState } from "react"; 
import { Link } from "react-router-dom";
import  useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact ] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between items-center bg-orange-400 shadow-md sticky top-0 z-50 px-8 py-2">
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
                    onClick={ () => {
                       btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                       : setBtnNameReact("Login");
                    }}
                    > {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
  );
};

export default Header;
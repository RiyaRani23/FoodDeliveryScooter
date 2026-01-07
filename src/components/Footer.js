import { useContext } from "react";
import UserContext from "../utils/UserContext";
// Add this line below:
import { Link } from "react-router-dom"; 

const Footer = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <footer className="bg-gray-900 text-white p-10 mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Brand & Location */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-green-400">🛵 Food Delivery Scooter</h2>
                    <p className="text-gray-400 text-sm italic">Fastest delivery in Ranchi.</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-300">
                        <span>📍</span>
                        <span className="hover:text-green-400 cursor-pointer">Kanke, Ranchi</span>
                    </div>
                </div>

                {/* Quick Links - Fixed the error here */}
                <div>
                    <h3 className="font-bold text-lg mb-4 underline decoration-green-500 underline-offset-4">Company</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li className="hover:text-white transition-colors">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">Team</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-bold text-lg mb-4 underline decoration-green-500 underline-offset-4">Help</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Support</li>
                        <li className="hover:text-white cursor-pointer">Partner</li>
                        <li className="hover:text-white cursor-pointer">Terms</li>
                    </ul>
                </div>

                {/* User Info Card */}
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-lg">
                    <h3 className="font-bold text-green-400 text-xs uppercase tracking-widest mb-2">Active User</h3>
                    <p className="text-lg font-bold text-gray-100">{loggedInUser}</p>
                    <p className="text-[10px] text-gray-500 mt-2">📍 Logged in from Ranchi</p>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
                 <p>© 2026 Scooter Delivery ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;
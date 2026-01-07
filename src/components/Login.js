import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [localName, setLocalName] = useState("");
    const { setUserName } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (localName.trim() === "") return alert("Please enter a name");
        
        // Updating the Global Context Name
        setUserName(localName); 
        
        // Redirecting back to home after login
        navigate("/");
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full mb-4 text-4xl shadow-inner">
                        🔐
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 text-sm italic">Enter your name to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">
                            User Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50 font-medium"
                            placeholder="Type your name here..."
                            value={localName}
                            onChange={(e) => setLocalName(e.target.value)}
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transform transition-all active:scale-95 shadow-lg shadow-green-200 text-lg"
                    >
                        Login 🚀
                    </button>
                </form>

                <div className="mt-6 text-center text-xs text-gray-400">
                    Secure Login 
                </div>
                <div className="mt-6 text-center text-xl text-orange-400 font-semibold">
                    Food Delivery Scooter🛵🍔
                </div>
            </div>
        </div>
    );
};

export default Login;
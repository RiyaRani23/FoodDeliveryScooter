import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
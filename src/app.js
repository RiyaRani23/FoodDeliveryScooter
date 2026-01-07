import React, {lazy, Suspense,useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error1.js";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import Login from "./components/Login";
import Footer from "./components/Footer.js";
import Shimmer from "./components/Shimmer.js";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy ( () => import ("./components/About"));

const AppLayout = () =>{
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Riya Rani", 
    };
    setUserName(data.name);
  }, []);

    return(
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
             <div className="app">
                  <Header/>
                 <div className="flex-grow">
                     <Outlet />
                </div>
                <Footer /> 
             </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
         element:
         <Suspense fallback={<h1><Shimmer/></h1>}>
          <About/>
          </Suspense>,
      },
      {
       path: "/contact",
       element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element:
         <Suspense fallback={<h1><Shimmer/></h1>}>
          <Grocery/>
          </Suspense>,
      },
      {
    path: "/login",
    element: <Login />,
    }
    ],
    errorElement:<Error/>
  }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
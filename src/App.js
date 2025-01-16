// named import
// import {Title} from "./components/Header";
// import * as ABC from "./components/Header";

import React, { useState } from "react";
// suspense waits for the bundel from lazy loading to be loaded
import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Header from "./components/Header";
// import About from "./components/About";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/loader";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Instamart from "./components/Instamart";

// Chunking
// code splitting
// Dynamic Bundling
// Lazy loading
// on demand loading 
// Dynamic import

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));
// upon On demand Loading -> upon render -> suspend loading

const AppLayout = () => {
const [user, setUser] = useState({
  name: "urvi",
  email: "urvi@gmail.com"
})
  // never write lazy loaf inside the componet lazy load only where you do your imports
  return (
    <>
    {/* <ABC.Title/> */}
    <Provider store={store}>
    <UserContext.Provider value={{
      user: user,
      setUser: setUser
    }}>
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  errorElement: <Error/>,
  children: [
    { 
     path: "/",
     element: <Body />
     },
    {
     path: "/about",
     element: (
      <Suspense fallback={<h1> Hey! wait for me I am LOading....... </h1>}>
         <About />
      </Suspense>
     ),
     children:[
      {
        path: "profile",
        element: <Profile />
      }
     ]
     },
    { 
      path: "/contact",
      element: <Contact /> 
    }, 
    { 
      path: "/resturant/:resId", 
      element: <RestrauntMenu />
     }, 
     { 
      path: "/instamart", 
      element: (
      <Suspense fallback={<Shimmer />}>
        <Instamart />
      </Suspense>
      ),
     }, 
     {
      path: '/cart',
      element: <Cart />
     }
  
  ],
},

])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);

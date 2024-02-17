import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import OrderItem from "../../Pages/OrderItem/OrderItem";
import Login from "../../UserFile/Login/Login";
import Signup from "../../UserFile/Signup/Signup";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import MyCart from "../../Pages/DashBoard/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import Payment from "../../Pages/Payment/Payment";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path:'/orderitem/:category',
                element:<OrderItem/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            }
        ]
        
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:"mycart",
                element:<MyCart/>
            },
            {
                path:"allUsers",
                element:<AllUsers/>
            },
            {
                path:'payment',
                element:<Payment/>
            }
        ]
    }

])
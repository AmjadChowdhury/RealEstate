import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Categories from "../Pages/Categories";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/estate/:esId",
                loader : () => fetch('estates.json'),
                element : <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
            },
            {
                path : "/categories",
                loader : () => fetch('categories.json'),
                element : <Categories></Categories>
            }
        ]
    }
])

export default Router;
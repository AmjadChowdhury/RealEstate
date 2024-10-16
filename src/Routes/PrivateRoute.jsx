import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
   const { user,loading} = useContext(AuthContext)
   const location = useLocation()

   if(loading){
    return <span>Loading hocce</span>
   }
   
   if(user){
    return children
   }

   return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children : PropTypes.node
}

export default PrivateRoute;
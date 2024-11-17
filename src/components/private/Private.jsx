import { useContext } from "react";
import { AuthProvider } from "../../provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
    const { user , loader} = useContext(AuthProvider)
    const location = useLocation();
    if(loader){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    if (!user) {
    return <Navigate state={location.pathname} to='/login'></Navigate>
   
    }
   
    return children
};

export default Private;
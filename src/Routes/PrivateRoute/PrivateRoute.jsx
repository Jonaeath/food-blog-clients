import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
AuthContext
    if(loading){
        return (
            <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center text-rose-500 uppercase mb-5 text-3xl font-bold">Please 1st Log-in for visit dashboard.</h1>
            <Link to='/login'>
            <button className="btn btn-active btn-secondary mb-4">Login</button>
            </Link>
            <progress className="progress bg-red-500 w-100 h-36"></progress>
        </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
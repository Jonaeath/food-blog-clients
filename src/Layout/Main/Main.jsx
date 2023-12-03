import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../ShareFile/Navbar/Navbar";
import Footer from "../../ShareFile/Footer/Footer";

const Main = () => {

    // Do not show header and footer for login and signup page
    const location = useLocation();
    const ignoreHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');


    return (
        <div>
            {ignoreHeaderFooter || <Navbar/>}
            <Outlet/>
            {ignoreHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;
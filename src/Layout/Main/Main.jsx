import { Outlet } from "react-router-dom";
import Navbar from "../../ShareFile/Navbar/Navbar";
import Footer from "../../ShareFile/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
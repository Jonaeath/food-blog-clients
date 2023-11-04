import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import MenuCard from "../MenuCard/MenuCard";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | MMJ FOOD</title>
            </Helmet>
            <Banner/>
            <Category/>
            <MenuCard/>
            <Featured/>
            <Testimonials/>            
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import MenuCard from "../MenuCard/MenuCard";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <MenuCard/>
            <Featured/>
            <Testimonials/>            
        </div>
    );
};

export default Home;
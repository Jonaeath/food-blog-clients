import { Helmet } from "react-helmet-async";
import Cover from "../../../ShareFile/Cover/Cover";
import menuImg from '../../../assets/bg/menu-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

import imgDesert from '../../../assets/bg/bg-desert.jpg';
import soupImage from '../../../assets/bg/soup.jpg';
import saladImage from '../../../assets/bg/bg-salad.jpg';
import pizzaImage from '../../../assets/bg/bg-pizza.jpg';

const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Helmet>
                <title>Menu | MMJ FOOD</title>
            </Helmet>
            <Cover menuImg = {menuImg} title= "MMJ MENU" ></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items = {offered}></MenuCategory>
            {/* For Pizza Items */}
            <MenuCategory
                items = {pizza}
                title = "pizza"
                coverImg = {pizzaImage}
            ></MenuCategory>
            {/* For Soup Items */}
            <MenuCategory
                items = {soup}
                title = "soup"
                coverImg = {soupImage}
            ></MenuCategory>
            {/* For Salad Items */}
            <MenuCategory
                items = {salad}
                title = "salad"
                coverImg = {saladImage}
            ></MenuCategory>
            {/* For Deserts Items */}
            <MenuCategory
                items = {desserts}
                title = "desert"
                coverImg = {imgDesert}
            ></MenuCategory>
        </div>
    );
};

export default Menu;
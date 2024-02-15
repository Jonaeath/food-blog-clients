import { Helmet } from "react-helmet-async";
import Cover from "../../ShareFile/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../hooks/useMenu";
import CoverImg from "../../assets/cover/coverOrder.jpeg";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OrderItem = () => {
    const categories = ['pizza','soup','salad','desert','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    
    return (
        <div>
        <Helmet>
            <title>Order | Item</title>
        </Helmet>
        <Cover menuImg={CoverImg} title="Order Food"></Cover>
        <Tabs className='mt-3' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className='uppercase'>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Salad</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
            <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
            <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
            <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
            <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
            <OrderTab items={drinks}></OrderTab>
            </TabPanel>
        </Tabs>
    </div>
    );
};

export default OrderItem;
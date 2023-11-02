import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../ShareFile/MenuItem/MenuItem";

const MenuCard = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading="Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
        menu?.map((item) => (
          <MenuItem 
          key={item._id} 
          item={item}
          
          ></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4">
        View Full Menu
      </button>
      </div>
    </section>
  );
};

export default MenuCard;

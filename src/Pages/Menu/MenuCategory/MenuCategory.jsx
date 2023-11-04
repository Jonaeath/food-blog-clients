import { Link } from "react-router-dom";
import Cover from "../../../ShareFile/Cover/Cover";
import MenuItem from "../../../ShareFile/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-2">
{ title && <Cover menuImg = {coverImg} title= {title}></Cover>
}      <div className="grid md:grid-cols-2 gap-10 my-2">
        {
        items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))
        }
      </div>
      <div className="flex justify-center mb-5">
        <Link to = {`/orderitem/${title}`}><button className="btn btn-outline btn-warning border-0 border-b-4 mt-4">Order Now</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;

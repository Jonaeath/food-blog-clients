import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../ShareFile/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const MenuCard = () => {
  const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading="Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
        popular?.map((item) => (
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

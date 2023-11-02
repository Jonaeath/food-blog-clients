import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import "./Featured.css";
import featuredImg from "../../../assets/featured/fItem.jpeg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
          The best burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch. The patty needs to be juicy, the bun soft but sturdy, and you want the meat/bun/accompaniment ratio to be even from first to last bite. Then you can add to your hearts content.
          </p>
          <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import FoodCard from "../../Component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import './Style/style.css';


const OrderTab = ({ items }) => {
  // Determine the number of items per page
  const itemsPerPage = 3;
  const totalItems = items.length;
  const [currentPage, setCurrentPage] = useState(0); 
  // Calculate the number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Create an array of pages with each page containing 6 items
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const pageItems = items.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
    pages.push(pageItems);
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="mt-5">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          handlePageChange(swiper.realIndex);
        }}
      >
        {pages.map((page, pageIndex) => (
          <SwiperSlide key={pageIndex} className="mb-16">
            <div className="grid md:grid-cols-3 gap-10">
              {page.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mb-3">
        <p>
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default OrderTab;

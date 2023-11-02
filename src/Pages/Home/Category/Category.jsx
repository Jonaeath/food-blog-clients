import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide1 from '../../../assets/slide/slide1.jpg';
import slide2 from '../../../assets/slide/slide2.jpg';
import slide3 from '../../../assets/slide/slide3.jpg';
import slide4 from '../../../assets/slide/slide4.jpg';
import slide5 from '../../../assets/slide/slide5.jpg';
import slide6 from '../../../assets/slide/slide6.jpg';


const Category = () => {  
  return (
    <section>
            
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={-300}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt=""/>
                    <h3 className="text-4xl uppercase -mt-16 text-white">Noodles</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase -mt-16 text-white">Burger</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h3 className="text-4xl uppercase -mt-16 text-white">Pizza</h3>
                </SwiperSlide>
            </Swiper>
        </section>
  );
};

export default Category;
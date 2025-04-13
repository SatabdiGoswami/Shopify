import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Deals = () => {
  return (
    <div id="Deals">
      <div className="Deals_heading">
        <img src="\Images\wave.svg" alt="" />
        <h4 id="Deals_title">Special Offer</h4>
      </div>
      <Swiper
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation, Pagination, Autoplay]}
        className="swiper-container"
      >

        <SwiperSlide><img src="Images/1.jpg" alt="Offer 1" /><p>Trending Footwear <strong>Starting ₹1999 → ₹999</strong></p></SwiperSlide>
        <SwiperSlide><img src="Images/1.jpg" alt="Offer 1" /><p>Trending Footwear <strong>Starting ₹1999 → ₹999</strong></p></SwiperSlide>
        <SwiperSlide><img src="Images/1.jpg" alt="Offer 1" /><p>Trending Footwear <strong>Starting ₹1999 → ₹999</strong></p></SwiperSlide>
        <SwiperSlide><img src="Images/1.jpg" alt="Offer 1" /><p>Trending Footwear <strong>Starting ₹1999 → ₹999</strong></p></SwiperSlide>
        <SwiperSlide><img src="Images/1.jpg" alt="Offer 1" /><p>Trending Footwear <strong>Starting ₹1999 → ₹999</strong></p></SwiperSlide>
        <SwiperSlide><img src="Images/1.jpg" alt="Offer 1" /><p>Trending Footwear <strong>Starting ₹1999 → ₹999</strong></p></SwiperSlide>
      </Swiper>
      <img src="\Images\wave.svg" alt="" style={{rotate:'180deg'}} />
    </div>
  );
};

export default Deals;

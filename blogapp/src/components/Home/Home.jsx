import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Home.css'
import CategoriesSlider from '../Categories/CategoriesSlider';
import BlogSlider from '../BlogCards/BlogSlider';

const width = window.innerWidth;
const height = window.innerHeight/2;

const Home = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./SliderImages/pic1.png" alt="" style={{width:"100%", height:"28rem", objectFit:"cover"}}/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="./SliderImages/pic2.png" alt="" style={{width:"100%", height:"28rem", objectFit:"cover"}}/>
        </SwiperSlide>

      </Swiper>
      <CategoriesSlider/>
      <BlogSlider/>
    </div>
  )
}

export default Home
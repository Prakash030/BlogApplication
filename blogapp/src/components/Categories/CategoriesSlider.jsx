import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import CategoriesCard from './CategoriesCard';


const CategoriesSlider = () => {

    const categories = [
        {
            name: "category1",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category2",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category3",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category4",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category5",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category6",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category7",
            path: "#",
            bgcolor: generate(),
        },
        {
            name: "category8",
            path: "#",
            bgcolor: generate(),
        },
    ]
    function createHex() {
        var hexCode1 = "";
        var hexValues1 = "0123456789abcdef";
        
        for ( var i = 0; i < 6; i++ ) {
          hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
        }
        return hexCode1;
      }

      function generate() {
  
        var deg = Math.floor(Math.random() *360);
        
        var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
        
        console.log(gradient);
        return gradient;
       
      }

    return (
        <div>
            <h1 style={{
                fontSize:'20px',
                fontWeight:'400',
                margin:'10px 5px'
            }}>
                Categories
            </h1>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    categories.map((category) => {
                        return (
                            <SwiperSlide >
                                <CategoriesCard {...category} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default CategoriesSlider
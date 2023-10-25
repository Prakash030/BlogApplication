import React, { useEffect, useState }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import CategoriesCard from './CategoriesCard';


const CategoriesSlider = () => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        fetch(`http://localhost:8000/blogcategories`)
          .then((res) => {
            return res.json()
          })
          .then(async (response) => {
            // console.log(response.categories)
            // let catobj = {
            //   name: string;
            //   path: string;
            //   bgcolor: string;
            // }
    
    
            const tempcat = await Promise.all(
              response.categories.map(async (category) => ({
                name: category,
                path: category,
                bgcolor: 'black'
                // bgcolor: await generate(),
              }))
            );
            // console.log(tempcat)
            setCategories(tempcat)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      useEffect(() => {
        getCategories()
      }, [])
    
    // function createHex() {
    //     var hexCode1 = "";
    //     var hexValues1 = "0123456789abcdef";
        
    //     for ( var i = 0; i < 6; i++ ) {
    //       hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    //     }
    //     return hexCode1;
    //   }

    //   function generate() {
  
    //     var deg = Math.floor(Math.random() *360);
        
    //     var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
        
    //     console.log(gradient);
    //     return gradient;
       
    //   }

    return (
        <div className='sliderout'>
      <h1>Categories</h1>
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
              <SwiperSlide>
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
import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';
import { toast } from 'react-toastify';

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([])
    
  const get10latestblogs = () => {
    fetch(`http://localhost:8000/blog`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            if (response.ok) {
                console.log(response)
                setBlogs(response.data.blogs);
            }
            else {
                toast(response.message, {
                    type: 'error',
                })
            }
        })
        .catch((error) => {
            toast(error.message, {
                type: 'error',
            })

        })
}
useEffect(() => {
    get10latestblogs();
}, [])


  return (
    <div className='sliderout'>
    <h1>Latest Blogs</h1>
    <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 2,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 2,
            },
            '@1.50': {
                slidesPerView: 5,
                spaceBetween: 2,
            },
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        {
            blogs.map((blog) => {
              return (
                  <SwiperSlide > {/* Provide a unique key */}
                      <BlogCard {...blog} />
                  </SwiperSlide>
                );
            })
        }

    </Swiper>
</div>
  )
}

export default BlogSlider
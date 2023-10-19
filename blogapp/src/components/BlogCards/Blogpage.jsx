import React, { FC, useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import './Blog.css';
import BlogsSlider from './BlogSlider'
import ClockLoader from "react-spinners/ClockLoader";

const BlogPage = () => {
    const [searchParams] = useSearchParams()
    const blogid = searchParams.get('blogid')
    console.log(blogid)
    const [loading, setLoading] = useState(false)
    //console.log(blogid)

    const [blog, setBlog] = useState({
        _id: '',
        title: '',
        description: '',
        imageUrl: '',
        paragraphs: [],
        category: '',
        owner: '',
        createdAt: '',
        updatedAt: ''
    });

    const [blogcreatedat, setBlogcreatedat] = useState('')
    const getBlogbyId = () => {
        setLoading(true)
        fetch(`http://localhost:8000/blog/${blogid}`,
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
                setLoading(false)
                if (response.ok) {
                    console.log(response.data.blog)
                    setBlog(response.data.blog);
                    const formattedDate = formatDate(response.data.blog.createdAt);
                    setBlogcreatedat(formattedDate)
                }
                else {
                    toast(response.message, {
                        type: 'error',
                    })
                }
            })
            .catch((error) => {
                setLoading(false)

                toast(error.message, {
                    type: 'error',
                })

            })
    }

    useEffect(() => {
        getBlogbyId()
        window.scrollTo(0, 0);
    }, [])
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate();
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${day} ${monthNames[monthIndex]} ${year}`;
    }
    return (
        <div className='blogpage-out'>
           

            {
                loading && blog._id == '' ?
                    <div className='loaderfullpage'>
                        <ClockLoader
                            color="#36d7b7"
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div className='blogpage'>
                        <div className='c1'>
                            <p className='createdat'>Created at {blogcreatedat}</p>
                            <p className='title'>{blog.title}</p>
                            <p className='category'>{blog.category}</p>

                           {
                            blog.imageUrl.length>0 && 
                            <img src={blog.imageUrl} alt={blog.title} width={100} height={100} className='blogimg' unoptimized />
                           }
                            <p className='description'>{blog.description}</p>
                        </div>
                        {
                            blog.paragraphs.map((paragraph, index) => (
                                <div className={
                                    index % 2 === 0 ? 'c2left' : 'c2right'
                                } key={index}>
                                    {
                                        paragraph.imageUrl.length > 0 &&
                                        <img src={paragraph.imageUrl} alt={blog.title} width={100} height={100}
                                            className='paraimg' unoptimized />
                                    }
                                    <div>
                                        <p className='title'>{paragraph.title}</p>
                                        <p className='description'>{paragraph.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <BlogsSlider />
                    </div>
            }



        </div>
    )
}

export default BlogPage
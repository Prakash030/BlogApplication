import React from 'react'
import './BlogCard.css'
// Category.propTypes = {
//     name: PropTypes.string,
//     path: PropTypes.string,
//     bgcolor: PropTypes.string,
//   };

export const BlogCard = (data) => {
  const {title,imageUrl, _id} = data;
  return (
    <div
    className='blogcard'
            onClick={() => {
                // router.push(`/pages/blogpage?blogid=${_id}`)
                window.location.href = `/blogpage?blogid=${_id}`
            }}
        >
            <div className='blogimg'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >

            </div>
            <p >
                {title}
            </p>
      </div>
  )
}

export default BlogCard
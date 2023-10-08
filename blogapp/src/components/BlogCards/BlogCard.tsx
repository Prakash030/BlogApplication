import React from 'react'
// Category.propTypes = {
//     name: PropTypes.string,
//     path: PropTypes.string,
//     bgcolor: PropTypes.string,
//   };

export const BlogCard = (data) => {
  const {name, path, bgcolor} = data;
  return (
    <div
    style={{
        width: '300px',
        height: '400px',
        display: 'flex',
        background: bgcolor,
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
      <p
      style={{color: 'white', fontSize: '15px'}}

      >
        {name}
      </p>
      </div>
  )
}

export default BlogCard
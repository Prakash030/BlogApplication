import React from 'react'
import './CategoryCard.css'
// Category.propTypes = {
//     name: PropTypes.string,
//     path: PropTypes.string,
//     bgcolor: PropTypes.string,
//   };

export const CategoriesCard = (data) => {
  const {name, path, bgcolor} = data;
  return (
    <div
    className='categorycard'
    >
      <p
      style={{fontSize: '18px'}}

      >
        {name}
      </p>
      </div>
  )
}

export default CategoriesCard
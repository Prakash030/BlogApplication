import React from 'react'
import './Addblog.css'

const AddBlog = () => {
  return (
    <div>
      <div className="addblog_in">
        <h1 className="head_1">Add Blog</h1>
        <form style={{
          width: '70%',
          minWidth: '250px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div className="forminput_cont">
            <label>Blog Name</label>
            <input type="text" placeholder='Enter Blog Title' />
          </div>

          <div className="forminput_cont">
            <label>Blog Description</label>
            <textarea placeholder='Enter Blog Description' />
          </div>

          <div className="forminput_cont">
            <label>Blog Image</label>
            <input type="file" />
          </div>

          <div className="paragraph">
          <div className="forminput_cont">
            <label>Paragraph Name</label>
            <input type="text" placeholder='Enter Paragraph Title' />
          </div>

          <div className="forminput_cont">
            <label>Paragraph Description</label>
            <textarea placeholder='Enter Paragraph Description' />
          </div>

          <div className="forminput_cont">
            <label>Paragraph Image</label>
            <input type="file" />
          </div>
          <button type='submit' className='main_button'>Add More Paragraph</button>
          </div>

          <button type='submit' className='main_button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddBlog
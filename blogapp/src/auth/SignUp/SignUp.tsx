import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className="authout">
      <div className="authin">
        <div className="left"></div>
        <div className="right">
          <form style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div className="forminput_cont">
              <label>Name</label>
              <input type="text" placeholder='Enter Your Name' />
            </div>
            <div className="forminput_cont">
              <label>Email</label>
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="forminput_cont">
              <label>Password</label>
              <input type="password" placeholder='Enter Your Password' />
            </div>
            <div className="forminput_cont">
              <label>Confirm Password</label>
              <input type="password" placeholder='Confirm your Password' />
            </div>

            <button type='submit' className='main_button'>Register</button>
            <p className='authlink'>Already have an account? <span onClick={()=>navigate('/auth/signin')}>login</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup 
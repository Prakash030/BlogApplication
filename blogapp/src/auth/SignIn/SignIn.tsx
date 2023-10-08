import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../auth.css'

const SignIn = () => {
    const navigate = useNavigate()
    return (
        <div>
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
                                <label>Password</label>
                                <input type="password" placeholder='Enter Your Password' />
                            </div>


                            <button type='submit' className='main_button'>Login</button>
                            <p className='authlink'>Don't have an account? <span onClick={() => navigate('/auth/signup')}>Register</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
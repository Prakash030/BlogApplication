import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../auth.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignIn = () => {
    const navigate = useNavigate()
    const [formData, setFromData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFromData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors({});
        // console.log(formData)
        const validationErrors: Record<string, string> = {};
        if (!formData.email) {
            validationErrors.email = "Email is required";
        }
        if (!formData.password) {
            validationErrors.password = "Password is required";
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                if (response.ok) {
                    toast(response.message, {
                        type: "success",
                        position: "top-right",
                        autoClose: 200
                    })
                    checkLogIn();
                }
                else {
                    toast(response.message, {
                        type: "error",
                        position: "top-right",
                        autoClose: 200
                    })
                }
            })

    }

    const checkLogIn = async () => {
        fetch("http://localhost:8000/auth/checklogin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                if (response.ok) {
                    window.location.href = '/'
                }
                else {
                    navigate('/auth/signin');
                }
            })
            .catch((err) => {
                console.log(err)
            })


    }
    return (
        <div>
            <ToastContainer />
            <div className="authout">
                <div className="authin">
                    <div className="left"></div>
                    <div className="right">
                        <form style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }} onSubmit={handleSubmit}>
                            <div className="forminput_cont">
                                <label>Email</label>
                                <input type="email" placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleChange} />
                                {errors.email && <span className="formerror">{errors.email}</span>}
                            </div>

                            <div className="forminput_cont">
                                <label>Password</label>
                                <input type="password" placeholder='Enter Your Password' name="password" value={formData.password} onChange={handleChange} />
                                {errors.password && <span className="formerror">{errors.password}</span>}
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
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import {BiPlusCircle, BiSolidUserCircle, BiSearchAlt} from 'react-icons/bi';
import { BiMenuAltRight } from 'react-icons/bi'
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { getCookie, setCookie, deleteCookie } from 'cookies-next'
import Cookies from 'js-cookie';
import OutsideClickHandler from 'react-outside-click-handler'

const Navbar = () => {
    const navigate = useNavigate();
    const [auth, setauth] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)
    const getMenuStyle = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpen && "-100%" }
        }
    }

    const checkLogin = async () => {
        fetch("http://localhost:8000/auth/checklogin", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                if (response.ok) {
                    // toast(response.message, {
                    //     type: 'success',
                    //     position: 'top-right',
                    //     autoClose: 2000
                    // })

                    // window.location.href = "/auth/signin"
                    setauth(true)

                } else {
                    // toast(response.message, {
                    //     type: 'error',
                    //     position: 'top-right',
                    //     autoClose: 2000
                    // });
                    setauth(false)
                }
            }).catch((error) => {
                toast(error.message, {
                    type: 'error',
                    position: 'top-right',
                    autoClose: 2000
                });
            })
    }

    useEffect(() => {
        checkLogin(); // Call the checkLogin function on route change
    }, []);

    const handleLogout = () => {
        Cookies.remove('authToken', { path: '/' });
        Cookies.remove('refreshToken', { path: '/' });

        // Redirect the user to the login page or any other appropriate route
        window.location.href = "/auth/signin";
        setauth(false)
    };

    return (
        <div className='navbar'>
            <ToastContainer />

            <div className="navbar-middle">
                <img src="./Logo/logo.png" alt="company logo" onClick={() => navigate('/')} />
            </div>



            <OutsideClickHandler
                onOutsideClick={() => {
                    setMenuOpen(false)
                }}
            >
                <div className=" h-menu "
                    style={getMenuStyle(menuOpen)}
                >

                    {
                        auth ?
                            <div className=" navbar-right">
                                <span onClick={() => navigate('/')}>Home</span>
                                <span onClick={() => navigate('/addblog')}>Create Blog</span>
                                <span onClick={() => navigate('/contact')}>Contact</span>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                            :
                            <div className="navbar-right">
                                <button style={{ marginRight: '20px' }} onClick={() => navigate('/auth/signin')}>Login</button>
                                <button onClick={() => navigate('/auth/signup')}>Signup</button>
                            </div>
                    }
                </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
                <BiMenuAltRight size={30} />
            </div>
        </div>
    )
}

export default Navbar
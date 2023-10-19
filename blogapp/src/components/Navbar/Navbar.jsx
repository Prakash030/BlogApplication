import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {BiPlusCircle, BiSolidUserCircle, BiSearchAlt} from 'react-icons/bi';
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {getCookie, setCookie, deleteCookie} from 'cookies-next'

const Navbar = () => {
    const navigate = useNavigate();
    const [auth, setauth] = useState(false)
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
        }).catch(( error) => {
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
    
    const handleLogout =  () => {
       deleteCookie('authToken');
       deleteCookie('refreshToken');
      window.location.href = "/auth/signin"
  }
    
  return (
    <div className='navbar'>
      <ToastContainer />

      <div className="navbar-middle">
          <img src="./Logo/logo.png" alt="company logo" onClick={()=>navigate('/')}/>
        </div>

        <div className="navbar-left" >
        <button onClick={()=> navigate("/profile")} className='link'>
            <BiSolidUserCircle className='icon'/>
        </button>
        <button onClick={()=> navigate("/addblog")} className='link'>
            <BiPlusCircle className='icon'/>
        </button>
        <button onClick={()=> navigate("/search")} className='link'>
            <BiSearchAlt className='icon'/>
        </button>
        </div>

        

      {
        auth ?
        <div className="navbar-right">
          <span onClick={()=> navigate('/')}>Home</span>
          <span onClick={()=> navigate('/about')}>About</span>
          <span onClick={()=> navigate('/contact')}>Contact</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
        :
        <div className="navbar-right">
        <button style={{marginRight:'20px'}} onClick={()=>navigate('/auth/signin')}>Login</button>
        <button onClick={()=>navigate('/auth/signup')}>Signup</button>
        </div>
        }

    </div>
  )
}

export default Navbar
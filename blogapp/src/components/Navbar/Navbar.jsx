import React from 'react'
import {useNavigate} from 'react-router-dom';
import {BiPlusCircle, BiSolidUserCircle, BiSearchAlt} from 'react-icons/bi';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    
  return (
    <div className='navbar'>
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

        <div className="navbar-middle">
          <img src="./Logo/logo.png" alt="company logo" onClick={()=>navigate('/')}/>
        </div>

        <div className="navbar-right">
          <span onClick={()=> navigate('/')}>Home</span>
          <span onClick={()=> navigate('/about')}>About</span>
          <span onClick={()=> navigate('/contact')}>Contact</span>
        </div>

    </div>
  )
}

export default Navbar
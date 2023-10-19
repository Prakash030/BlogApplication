import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import{ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const [formData, setFromData] = useState({
    name : "",
    email: "",
    password: "",
    confirmPassword: ""
  })

const [errors, setErrors] = useState<Record<string,string>>({});
// const [message, setMessage] = useState();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target;
  setFromData({...formData, [name]: value});
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log("http://localhost:8000")
  setErrors({});
  // console.log(formData)
  const validationErrors: Record<string, string> = {};
  if(!formData.email){
    validationErrors.email = "Email is required";
  }
  if(!formData.password){
    validationErrors.password = "Password is required";
  }
  if(formData.password!= formData.confirmPassword){
    validationErrors.confirmPassword = "Password does not match";
  }
  if(Object.keys(validationErrors).length>0 ){
    setErrors(validationErrors);
    return;
  }

  fetch("http://localhost:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then((res)=>{
    return res.json();
  })
  .then((response)=>{
    if(response.ok){
      toast(response.message, {
      type: "success",
      position: "top-right",
      autoClose: 200
    })
    setFromData({
      name : "",
      email: "",
      password: "",
      confirmPassword: ""
    })
    }
    else {
      toast(response.message, {
        type: "error",
        position: "top-right",
        autoClose: 200
      })
    }
  })
  .catch((error)=>{
    toast(error.message, {
      type: "error",
      position: "top-right",
      autoClose: 200
    })
  })
}


  const navigate = useNavigate()
  return (
    <div className="authout">
      <ToastContainer />
      <div className="authin">
        <div className="left"></div>
        <div className="right">
          <form style={{
            display: 'flex',
            flexDirection: 'column',
          }} onSubmit={handleSubmit}>
            <div className="forminput_cont">
              <label>Name</label>
              <input type="text" placeholder='Enter Your Name' name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="formerror">{errors.name}</span>}
            </div>
            <div className="forminput_cont">
              <label>Email</label>
              <input type="email" placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleChange}/>
              {errors.email && <span className="formerror">{errors.email}</span>}
            </div>
            <div className="forminput_cont">
              <label>Password</label>
              <input type="password" placeholder='Enter Your Password' name="password" value={formData.password} onChange={handleChange}/>
              {errors.password && <span className="formerror">{errors.password}</span>}
            </div>
            <div className="forminput_cont">
              <label>Confirm Password</label>
              <input type="password" placeholder='Confirm your Password' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <span className="formerror">{errors.confirmPassword}</span>}
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
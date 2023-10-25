import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AddBlog from './components/AddBlog/AddBlog'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Signup from './auth/SignUp/SignUp'
import SignIn from './auth/SignIn/SignIn'
import { useEffect } from 'react'
import BlogPage from './components/BlogCards/Blogpage'

function App() {

  // const checkLogin = async () => {


//     fetch(`http:localhost:8000/auth/checklogin`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include'
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((response) => {
//         console.log(response)



//         if (response.ok) {
//           // toast(response.message, {
//           //     type: 'success',
//           //     position: 'top-right',
//           //     autoClose: 2000
//           // })

//           // window.location.href = "/"


//         } else {
//           // toast(response.message, {
//           //     type: 'error',
//           //     position: 'top-right',
//           //     autoClose: 2000
//           // });
//           window.location.href = "/auth/signin"
            
//         }
//       })
//       .catch((error) => {
//         window.location.href = "/"

//       })
//   };
//   useEffect(() => {
//     checkLogin();
// }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/blogpage" element={<BlogPage />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

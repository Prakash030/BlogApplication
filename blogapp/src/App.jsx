import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AddBlog from './components/AddBlog/AddBlog'
import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Home from './components/Home/Home'
import Signup from './auth/SignUp/SignUp'
import SignIn from './auth/SignIn/SignIn'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<SignIn />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

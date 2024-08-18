import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Signup from "./Signup/Signup"
import Signin from "./Signin/Signin"
import Blogs from "./Blog/Blogs"
import Nav from "./Navbar/Nav"
import Blog from "./Blog/Blog"
import Publish from "./Publish"
import Profile from "../Pages/Profile"
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/nav" element={<Nav/>}/>
                    <Route path="/blog/:id" element={<Blog/>}/>
                    <Route path="/publish" element={<Publish/>}/>
                    <Route path="/profile/:userId" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router

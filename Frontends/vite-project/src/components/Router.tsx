import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Signup from "./Signup/Signup"
import Signin from "./Signin/Signin"
import Blog from "./Blog/Blog"
import Nav from "./Navbar/Nav"
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/nav" element={<Nav/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router

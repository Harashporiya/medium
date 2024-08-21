import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Blogs from "./Blog/Blogs";
import Nav from "./Navbar/Nav";
import Blog from "./Blog/Blog";
import Publish from "./Publish";
import Profile from "../Pages/Profile";
import PrivateRoute from "../components/PrivateRoute";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    
                   
                    <Route path="/blogs" element={
                        <PrivateRoute>
                            <Blogs />
                        </PrivateRoute>
                    }/>
                    <Route path="/nav" element={
                        <PrivateRoute>
                            <Nav />
                        </PrivateRoute>
                    }/>
                    <Route path="/blog/:id" element={
                        <PrivateRoute>
                            <Blog />
                        </PrivateRoute>
                    }/>
                    <Route path="/publish" element={
                        <PrivateRoute>
                            <Publish />
                        </PrivateRoute>
                    }/>
                    <Route path="/profile/:userId" element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;

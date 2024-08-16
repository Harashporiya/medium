import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Signup from "./Signup/Signup"
import Signin from "./Signin/Signin"
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router

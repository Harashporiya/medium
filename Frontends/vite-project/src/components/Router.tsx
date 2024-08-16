import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router

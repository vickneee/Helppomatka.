import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/hotels" element={<List/>}/>
                <Route path="/hotels/:id" element={<Hotel/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App

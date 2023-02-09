import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./componets/Navbar/Navbar";
import Shows from "./Pages/Shows/Shows";

function App() {
    return <BrowserRouter>
        <div className={""}>
            <Navbar/>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/shows"} exact element={<Shows/>}/>
            </Routes>
        </div>
    </BrowserRouter>
}

export default App;

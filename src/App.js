import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Show from "./Pages/Show/Show";
import Navbar from "./componets/Navbar/Navbar";
import React from "react";

function App() {
    return <BrowserRouter>
        <div className={""}>
            <Navbar/>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/show/:id"} exact element={<Show/>}/>
            </Routes>
        </div>
    </BrowserRouter>
}

export default App;

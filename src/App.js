import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Show from "./Pages/Show/Show";

function App() {
    return <BrowserRouter>
        <div className={""}>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/show/:id"} exact element={<Show/>}/>
            </Routes>
        </div>
    </BrowserRouter>
}

export default App;

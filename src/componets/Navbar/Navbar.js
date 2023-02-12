import React from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";

export default function Navbar() {


    return <div className={"navbar"}>

        <div className={'nav-links'}>
            <Link to={"/"}>Home</Link>
            <Link to={"/stars"}>Stars</Link>
        </div>

    </div>
}

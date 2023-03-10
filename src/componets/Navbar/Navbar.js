import React, {memo} from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";

 function Navbar() {

console.log("render")
    return <div className={"navbar"}>
        <div>
            <Typography variant={"h4"}>
                Box Office
            </Typography>
            <Typography variant={"subtitle1"}>
                Are You looking for a movie or an actor ?
            </Typography>
        </div>

        <div className={'nav-links'}>
            <Link to={"/"}>Home</Link>
            <Link to={"/starred"}>Stars</Link>
        </div>

    </div>
}
export default memo(Navbar)

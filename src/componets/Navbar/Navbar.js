import React from "react";
import "./Navbar.css";
import { Typography} from "@mui/material";

export default function Navbar() {

    const links = [
        {
            to: "/",
            text: "Home"
        },
        {
            to: "shows",
            text: "shows"
        }
    ]
    return <div className={"navbar"}>
        <Typography variant={"h3"}>
            Box Office
        </Typography>
        <Typography variant={"subtitle1"}>Are You looking for a movie or an actor?</Typography>
        {/*<AppBar variant={"outlined"}>*/}
            <ul>
                {
                    links.map(value => {
                        return <li key={value.to}>
                            {value.text}
                        </li>
                    })
                }
            </ul>
        {/*</AppBar>*/}

    </div>
}

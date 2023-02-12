import React from "react";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function ShowCard({id, image, name, summary}) {
    const summaryText = summary
        ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
        : "No description"
    return <div className={"card"}>
        <div>
            <img src={image} alt={name}/>
        </div>

        <Typography variant={"h5"}>
            {name}
        </Typography>
        <Typography variant={"body2"} color={"gray"}>{summaryText}</Typography>

        <div className={"buttons"}>
            <Link to={`/show/${id}`}>Read More</Link>
            <Button>
                Star Me
            </Button>
        </div>
    </div>
}

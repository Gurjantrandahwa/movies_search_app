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

        <Typography variant={"h4"}>
            {name}
        </Typography>
        <Typography variant={"body2"} color={"gray"}>{summaryText}</Typography>

        <div>
            <Link to={`/show/${id}`}>Read More</Link>
            <Button
                variant={"outlined"}
            >
                Star Me
            </Button>
        </div>
    </div>
}

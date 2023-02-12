import React from "react";
import "./ShowData.scss";
import {Typography} from "@mui/material";

export default function ShowMainData({ image, name, rating, summary, tags}) {
    return<div className={"show-data"}>
        <img src={image?image.original:"image not found"} alt={""}/>
        <div>
            <h1>{name}</h1>
            <div>
                <div className={"star"}/>
                <span>{rating.average || "N/A"}</span>
            </div>

            <div dangerouslySetInnerHTML={{__html:summary}}/>
            <div>
                <h2>Tags {" "}:</h2>
                {tags.map(( val,i)=>{
                    return<Typography
                        variant={"body2"}
                        color={"mediumspringgreen"}
                        key={i}>
                        {val}
                    </Typography>
                })}
            </div>
        </div>
    </div>
}

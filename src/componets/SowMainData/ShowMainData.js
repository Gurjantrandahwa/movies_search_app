import React from "react";
import "./ShowMainData.scss";
import {Typography} from "@mui/material";
import {Star} from "../Helpers/style";
import img from "../Images/img.png"
export default function ShowMainData({image, name, rating, summary, tags}) {
    return <div className={"show-data"}>
        <img src={image ? image.original : img} alt={""}/>
        <div className={"main-text"}>
            <h1>{name}</h1>
            <div className={"rating"}>
               <Star/>
                <span>{rating.average || "N/A"}</span>
            </div>

            <div dangerouslySetInnerHTML={{__html: summary}}/>
            <div className={'tags'}>
                <Typography variant={"h5"}>Tags {" "}:</Typography>
                {tags.map((val, i) => {
                    return <Typography
                        variant={"body2"}

                        key={i}>
                       <Typography className={"tag"}> {val}</Typography>
                    </Typography>
                })}
            </div>
        </div>
    </div>
}

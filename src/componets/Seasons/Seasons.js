import React from "react";
// import img from "../Images/img.png"
import "./seasons.scss";
import {Typography} from "@mui/material";

export default function Seasons({seasons}) {
    return <div className={"seasons"}>
        <Typography variant={"h6"}>
           Total Seasons : <span className={"length"}>{seasons.length}</span>
        </Typography>
        <Typography variant={"h6"}>
            Episodes in total : {' '}
       <span className={"length"}>
           {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
       </span>
        </Typography>
        <div className={"single-season"}>
            {seasons.map(season => (
                <div key={season.id}>
                    <div style={{display: "flex"}}>
                        <p>{season.number} : </p>
                        <p>
                            Episodes: <span>{season.episodeOrder}</span>
                        </p>
                    </div>
                    <div>
                        Aired: {' '}
                        <span>{season.premiereDate} - {season.endDate}</span>
                    </div>

                </div>
            ))}
        </div>
    </div>
}

import React from "react";
// import img from "../Images/img.png"
import "./seasons.scss";
import {Typography} from "@mui/material";

export default function Seasons({seasons}) {
    return <div className={"seasons"}>
        <h3>Seasons</h3>
        <Typography variant={"h6"}>
           Total Seasons : <span className={"length"}>{seasons.length}</span>
        </Typography>
        <Typography variant={"h6"}>
            Episodes in total : {' '}
       <span className={"length"}>
           {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
       </span>
        </Typography>
        <div className={"single-season-wrapper"}>
            {seasons.map(season => (
                <div key={season.id} className={"single-season"}>
                    <div>
                        <Typography variant={"h6"}>Season : <span className={"color-green"}>{season.number}</span></Typography>
                        <Typography variant={"body1"}>
                           No. of Episodes : <span className={"color-green"}>{season.episodeOrder}</span>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant={"body1"}>
                            Aired : {' '}
                            <span className={"color-green"}>{season.premiereDate} - {season.endDate}</span>
                        </Typography>

                    </div>

                </div>
            ))}
        </div>
    </div>
}

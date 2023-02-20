import React from "react";
import {Typography} from "@mui/material";

export default function ActorCard({name, country, birthday, deathday, gender, image}) {
    return <div className={"card"}>
        <div>
            <img src={image} alt={""}/>
        </div>
        <div className={"action-text"}>
            <Typography variant={"h6"}>
                {name} {gender ? `(${gender})` : null}
            </Typography>
            <Typography sx={{
                marginBottom: "10px",
                color: "goldenrod"
            }}>
                {country ? `Comes from ${country}` : 'No country known'}
            </Typography>
            {birthday ? <p className={"color-green"}>{birthday}</p> : null}
            <p className={"color-green"}>{deathday ? `Died ${deathday}` : "Alive"}</p>
        </div>


    </div>
}

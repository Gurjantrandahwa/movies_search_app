import React from "react";
import {Typography} from "@mui/material";

export default function ActorCard({name, country, birthday, deathday, gender, image}) {
    return <div>
        <div>
            <img src={image} alt={""}/>
        </div>
        <Typography variant={"h4"}>
            {name} {gender ? `(${gender})` : null}
        </Typography>
        <Typography>
            {country ? `Comes from ${country}` : 'No country known'}
        </Typography>
        {birthday ? <p>{birthday}</p> : null}
        <p>{deathday ? `Died ${deathday}` : "Alive"}</p>

    </div>
}

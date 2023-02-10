import React from "react";
import "./show.scss";
import ShowCard from "./ShowCard";
import img from "../Images/img.png";

export default function ShowGrid({data}) {

    return <div className={"show-wrapper"}>
        {
            data.map(({show}) => <ShowCard
                key={show.id}
                id={show.id}
                name={show.name}
                image={show.image ? show.image.medium : img}
                summary={show.summary}
            />)
        }
    </div>
}

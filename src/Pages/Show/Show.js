import React from "react";
import {useParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import ShowMainData from "../../componets/SowMainData/ShowMainData";
import Details from "../../componets/Details/Details";
import Seasons from "../../componets/Seasons/Seasons";
import Cast from "../../componets/Cast/Cast";
import {useShow} from "../../componets/Helpers/custom-hooks";
import "./show.scss";
export default function Show() {
    const {id} = useParams();
    const {show, isLoading, error} = useShow(id)
    if (isLoading) {
        return <div className={"loading"}>
            <CircularProgress color={"error"} size={50}/>
        </div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return <div className={"show-container"}>

        <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
        />

        <h3>Details</h3>
        <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
        />

        <div>
            <h3>Seasons</h3>
            <Seasons
                seasons={show._embedded.seasons}
            />
        </div>
        <div>
            <h3>Cast</h3>
            <Cast
                cast={show._embedded.cast}
            />
        </div>
    </div>
}

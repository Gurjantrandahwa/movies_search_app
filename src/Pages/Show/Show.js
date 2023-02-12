import React, {useEffect, useReducer} from "react";
import {useParams} from "react-router-dom";
import {apiGet} from "../../componets/Helpers/config";
import {CircularProgress} from "@mui/material";
import ShowMainData from "../../componets/SowMainData/ShowMainData";
import Details from "../../componets/Details/Details";
import Seasons from "../../componets/Seasons/Seasons";
import Cast from "../../componets/Cast/Cast";

export default function Show() {
    const {id} = useParams();
    const reducer = (prevState, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': {
                return {isLoading: false, error: null, show: action.show}
            }

            case 'FETCH_FAILED': {
                return {...prevState, isLoading: false, error: action.error}
            }

            default:
                return prevState
        }

    }
    const initialState = {
        show: null,
        isLoading: true,
        error: null
    }

    const [{show, error, isLoading}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let isMounted = true
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(results => {
                setTimeout(() => {
                    if (isMounted) {
                        dispatch({type: 'FETCH_SUCCESS', show: results})
                    }
                }, 2000)
            }).catch(err => {
            if (isMounted) {
                dispatch({type: 'FETCH_FAILED', error: err.message})
            }
        })
        return () => {
            isMounted = false;
        }
    }, [id])
    console.log(show, "show")

    if (isLoading) {
        return <div>
            <CircularProgress color={"error"} size={100}/>
        </div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return <div>

        <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
        />
        <div>

            <h3>Details</h3>
            <Details
                status={show.status}
                network={show.network}
                premiered={show.premiered}
            />
        </div>
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

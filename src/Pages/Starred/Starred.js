import React, {useEffect, useState} from "react";
import {useShows} from "../../componets/Helpers/custom-hooks";
import {apiGet} from "../../componets/Helpers/config";
import {CircularProgress} from "@mui/material";
import ShowGrid from "../../componets/Show/ShowGrid";

export default function Starred() {
    const [starred] = useShows();
    const [shows, setShows] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (starred && starred.length > 0) {
            const promises = starred.map(showId => apiGet(`/shows/${showId}`))
            Promise.all(promises)
                .then(apiData =>
                    apiData.map(show => ({show}))
                )
                .then(results => {
                    setShows(results)
                    setLoading(false)
                }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [starred])
    console.log(shows)
    return <div>
        {
            loading && <div>
                <CircularProgress color={"error"} size={200}/>
            </div>

        }
        {
            error && <div>
                Error {error}
            </div>
        }
        {!loading && !shows && <div>No shows are added</div>}
        {
            !loading && !error && shows && <ShowGrid data={shows}/>
        }
    </div>
}

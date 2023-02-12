import React, {useEffect, useReducer} from "react";
import {useParams} from "react-router-dom";
import {apiGet} from "../../componets/Helpers/config";

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
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return <div>

    </div>
}

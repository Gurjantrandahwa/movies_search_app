import React from "react";
import "../../Pages/Show/show.scss";
import ShowCard from "./ShowCard";
import img from "../Images/img.png";
import {useShows} from "../Helpers/custom-hooks";
import "./showcard.scss"
export default function ShowGrid({data}) {
    const [starredShows, dispatchStarred] = useShows();

    return <div className={"show-wrapper"}>
        {
            data.map(({show}) => {
                    const isStarred = starredShows.includes(show.id);

                    function onStarCLick() {
                        if (isStarred) {
                            dispatchStarred({type: 'REMOVE', showId: show.id})
                        }else {
                            dispatchStarred({type: 'ADD', showId: show.id})
                        }
                    }

                    return (
                        <ShowCard
                            key={show.id}
                            id={show.id}
                            name={show.name}
                            image={show.image ? show.image.medium : img}
                            summary={show.summary}
                            onStarClick={onStarCLick}
                            isStarred={isStarred}
                        />
                    )
                }
            )
        }
    </div>
}

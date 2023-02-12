import React from "react";

export default function Seasons({seasons}) {
    return <div>
        <p>{seasons.length}</p>
        <p>
            Episodes in total : {' '}
            {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </p>
        <div>
            {seasons.map(season => (
                <div key={season.id}>
                    <div style={{display: "flex"}}>
                        <p>{season.number} : </p>
                        <p>
                            Episodes: <span>{season.episodeOrder}</span>
                        </p>
                    </div>
                    <div>
                        <img
                            src={season.image.original ? season.image.original : "not found"}
                            width={100}
                            height={100}
                            alt={""}
                        />
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

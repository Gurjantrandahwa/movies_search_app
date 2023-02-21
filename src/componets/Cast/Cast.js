import React from "react";
import "./cast.scss";

export default function Cast({cast}) {
    return <div className={"cast-wrapper"}>

        <h3>Cast</h3>
        {
            cast.map(({person, character, voice}, index) => {
                return <div key={index} className={"single-cast"}>
                    <img src={person.image ? person.image.medium : "image not fund"}
                         height={100}
                         width={100}
                         alt={"cast person"}
                    />
                    <div>
                        <p>Name :  <span className={"color-green"}>{person.name}</span></p>
                        <p>Character Name : <span className={"color-green"}>{character.name}</span></p>
                        <p> {voice ? 'Voice' : ""}</p>

                    </div>
                </div>
            })
        }
    </div>
}

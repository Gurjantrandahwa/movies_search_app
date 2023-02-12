import React from "react";

export default function Cast({cast}) {
    return <div>
        {
            cast.map(({person, character, voice}, index) => {
                return <div key={index}>
                    <img src={person.image ? person.image.medium : "image not fund"}
                         height={100}
                         width={100}
                         alt={"cast person"}
                    />
                    <div>
                        {person.name} | {character.name} {voice ? '|Voice' : ""}
                    </div>
                </div>
            })
        }
    </div>
}

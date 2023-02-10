import React, {useState} from "react";
import "./home.scss";
import {Button, TextField, Typography} from "@mui/material";
import {apiGet} from "../../componets/config";

export default function Home() {
    const [input, setInput] = useState('')
    const [results, setResults] = useState(null)
    const [options, setOptions] = useState("shows")
    const isShowSearch = options === "shows";

    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onSearch = () => {
        apiGet(`/search/shows?q=${input}`)
            .then(result => setResults(result))
    }
    const onkeydown = (e) => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }
    const onRadioChange = (e) => {
        setOptions(e.target.value)
    }
    console.log(results)
    const displayResults = () => {
        if (results && results.length === 0) {
            return <div>
                No Results found
            </div>
        }
        if (results && results.length > 0) {
            return <div>
                {results.map((value) => {
                    return <div key={value.show.id}>
                        <Typography>{value.show.name}</Typography>
                    </div>
                })}
            </div>
        }
        return null;
    }
    return <div className={"home"}>
        <div>
            <TextField
                type={"text"}
                placeholder={"Search Here..."}
                value={input}
                onKeyDown={onkeydown}
                onChange={onChange}
                size={"small"}
            />

            <Button
                size={"medium"}
                variant={"outlined"}
                onClick={onSearch}
                onChange={onRadioChange}>
                Search
            </Button>
            <div>
                <label htmlFor={"shows-search"}>
                    Shows
                    <input
                        id={"shows-search"}
                        type={"radio"}
                        checked={isShowSearch}
                        onChange={onRadioChange}
                        value={"shows"}/>

                </label>

                <label htmlFor={"actors-search"}>
                    Actors
                    <input
                        id={"actors-search"}
                        type={"radio"}
                        value={"people"}
                        checked={!isShowSearch}
                        onChange={onRadioChange}/>
                </label>
            </div>
        </div>


        {displayResults()}
    </div>
}

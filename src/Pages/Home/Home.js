import React, {useState} from "react";
import "./home.scss";
import {Button, Checkbox, TextField, Typography} from "@mui/material";
import {apiGet} from "../../componets/Helpers/config";
import ShowGrid from "../../componets/Show/ShowGrid";
import ActorGrid from "../../componets/Actor/ActorGrid";



export default function Home() {
    const [input, setInput] = useState('')
    const [results, setResults] = useState(null)
    const [options, setOptions] = useState("shows")
    const isShowSearch = options === "shows";

    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onSearch = () => {
        apiGet(`/search/${options}?q=${input}`)
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
    const displayResults = () => {
        if (results && results.length === 0) {
            return <div>
                No Results found
            </div>
        }
        if (results && results.length > 0) {
            return results[0].show ?
                (
                    <ShowGrid data={results}/>
                ):(
                    <ActorGrid  data={results}/>
                )

        }
        return null;
    }
    return <div className={"home"}>

        <Typography variant={"h4"}>
            Box Office
        </Typography>
        <Typography variant={"subtitle1"}>
            Are You looking for a movie or an actor ?
        </Typography>
        <div>
            <TextField
                variant={"outlined"}
               className={"search-bar"}
                type={"text"}
                placeholder={"Search Here..."}
                value={input}
                onKeyDown={onkeydown}
                onChange={onChange}
                size={"small"}
            />
            <div className={"radios"}>
                <label htmlFor={"shows-search"}>

                    <Checkbox
                        sx={{
                            color: "grey",
                            '&.Mui-checked': {
                                color: "#01f556",
                            },
                        }}
                        id={"shows-search"}
                        type={"radio"}
                        checked={isShowSearch}
                        onChange={onRadioChange}
                        value={"shows"}/>
                    Shows
                </label>

                <label htmlFor={"actors-search"}>

                    <Checkbox
                        sx={{
                            color: "grey",
                            '&.Mui-checked': {
                                color: "#01f556",
                            },
                        }}
                        id={"actors-search"}
                        type={"radio"}
                        value={"people"}
                        checked={!isShowSearch}
                        onChange={onRadioChange}/>
                    Actors
                </label>
                <Button
                    onClick={onSearch}
                    onChange={onRadioChange}>
                    Search
                </Button>
            </div>


        </div>

        {displayResults()}
    </div>
}

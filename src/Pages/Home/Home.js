import React, {useState} from "react";
import "./home.scss";
import {Button, Checkbox, TextField} from "@mui/material";
import {apiGet} from "../../componets/Helpers/config";
import ShowGrid from "../../componets/Show/ShowGrid";
import ActorGrid from "../../componets/Actor/ActorGrid";
import Navbar from "../../componets/Navbar/Navbar";


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
        <Navbar/>
        <div>
            <TextField
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
                            border:"1px solid grey",
                            '&.Mui-checked': {
                                border:"1px solid green",
                                color: "green",
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
                            border:"1px solid grey",
                            '&.Mui-checked': {
                                border:"1px solid green",

                                color: "green",
                            },
                        }}
                        id={"actors-search"}
                        type={"radio"}
                        value={"people"}
                        checked={!isShowSearch}
                        onChange={onRadioChange}/>
                    Actors
                </label>
            </div>
            <Button
                variant={"outlined"}
                onClick={onSearch}
                onChange={onRadioChange}>
                Search
            </Button>

        </div>

        {displayResults()}
    </div>
}

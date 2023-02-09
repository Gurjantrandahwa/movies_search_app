import React, {useState} from "react";
import "./home.css";
import {Button, TextField, Typography} from "@mui/material";

export default function Home() {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([])
    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(res => res.json())
            .then(result => setResults(result))

    }
    const onkeydown = (e) => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }
    console.log(results)
    const displayResults = () => {
        if (results.length === 0) {
            return <Typography variant={"h6"} color={"error"}>
                No Results found
            </Typography>
        } else {
            return <div>
                {results.map((value) => {
                    return <div key={value.show.id}>
                        <Typography>{value.show.name}</Typography>
                        {/*<img src={value.show.image.original} alt={""} width={200}/>*/}
                    </div>
                })}
            </div>
        }
        return null;
    }
    return <div className={"home"}>
        <div>
            <TextField type={"text"}
                       value={input}
                       onKeyDown={onkeydown}
                       onChange={onChange}
                       size={"small"}
            />
            <Button
                variant={"outlined"}
                onClick={onSearch}>
                Search
            </Button>
        </div>


        {displayResults()}
    </div>
}

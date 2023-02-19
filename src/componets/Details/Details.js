import React from "react";
import "./details.scss";
import {Typography} from "@mui/material";

export default function Details({ network, status, premiered}) {
    return<div className={"details"}>
        <Typography variant={"h6"}>
            Status : <span className={"status"}>{status}</span>
        </Typography>
        <Typography variant={"h6"}>
            Premiered : <span className={"status"}>{premiered} </span>
            <span className={"network"}> {network ?`On ${network.name} "Channel"`: null}</span>
        </Typography>

    </div>
}

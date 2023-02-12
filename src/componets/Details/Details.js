import React from "react";
export default function Details({ network, status, premiered}) {
    return<div>
        <p> Status : {status}</p>
        <p>
            Premiered : {premiered} {network ?`On ${network.name}`: null}
        </p>

    </div>
}

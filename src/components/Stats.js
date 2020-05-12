import React from "react";

const Stats = ({pid,profile,battingStyle,bowlingStyle}) => {
    return (
        <div>
            <h1>{pid}</h1>
            <p>{profile}</p>
            <h3>{battingStyle}</h3>
            <h4>{bowlingStyle}</h4>
        </div>
       
    )
}

export default Stats;
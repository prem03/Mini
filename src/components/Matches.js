import React from 'react';
import './cricket.css';

const Matches = ( props ) => {
    return (
        <div className="Cricket1" >
            <p >{props.id}   <br/> {props.stat} <br/>{props.score}   <br/>  {props.description} </p>
        </div>
    )
};

export default Matches;
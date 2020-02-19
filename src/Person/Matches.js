import React from 'react';

const Matches = ( props ) => {
    return (
        <div>
            <p >{props.id}     {props.stat} </p>
            <p >{props.score}     {props.description} </p>

            {/* <p>{props.children}</p> */}
            {/* <input type="text" onChange={props.changed} value={props.stat} /> */}
        </div>
    )
};

export default Matches;
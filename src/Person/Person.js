import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am a {props.name} and {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person;
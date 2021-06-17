import React from 'react';
import './TextField.css';

function TextField(props) {
    return (
        <div className="text-box">
            <i className={`${props.class}`}></i>
            <input onChange={props.onChange} placeholder={`${props.placeholder}`}/>
        </div>
    )
}

export default TextField

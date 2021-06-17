import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button type="button"  className={`${props.class}`} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button

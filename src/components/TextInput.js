import React from 'react';
import './TextInput.css';

function TextInput(props) {
    return (
        <div className="form-group" style={{textAlign: "left"}}>
            <label className="inputs">{props.label}</label>
            <br/>
            <input placeholder={props.placeholder} className="form-control inputs"/>
        </div>
        
    )
}

export default TextInput

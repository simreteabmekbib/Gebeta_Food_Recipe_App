import React from 'react'
import './dropdown.css'

function Dropdown(props) {
    return (
        <div className="text-box form-group">
            <i className="fas fa-user"></i>
            <select onChange={props.onChange}>
            <option>User Type</option>
            <option>User Type</option>
            <option>Chef</option>
            </select>
        </div>
    )
}

export default Dropdown

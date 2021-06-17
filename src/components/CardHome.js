import {Link} from 'react-router-dom';
import React from 'react';
import './CardHome.css';

function CardHome(props) {
    return (
        <Link to="/category">
        <div className="card ms-5 food-imgs">
            <img src={props.src} className="card-img-top r-card-img"/>
            <p class={`img-text ${props.class}`}>{props.text}</p>
        </div>
        </Link>
    )
}

export default CardHome

import React from 'react'
import {Link} from 'react-router-dom';

function CardItem() {
    return (
        <>
        <li className="card_items">
            <Link className="cards__item__link">
                <figure className="card__item__pic-wrap">
                    <img src="/" alt="Food_image" className="cards__items__img" />
                </figure>
                <div className="cards__items__info">
                    <h5 className="cards__items__text"></h5>
                </div>
            </Link>
        </li>
        </>
    )
}

export default CardItem


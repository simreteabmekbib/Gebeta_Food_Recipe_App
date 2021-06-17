import React from 'react'
import CardItem from './CardItem'

function Card() {
    return (
        <>
        <div className="cards"> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem/>
                    </ul>

                </div>
            </div>
        </div>

        </>
    )
}

export default Card


import React from 'react';
import CardHome from './CardHome';
import './HomeCards.css'


function HomeCards() {
    return (
        <div class="container-fluid mb-5 pl-5">
            <h1 class="titles ms-5 mt-5">FOODS</h1>
            <div class="row mb-5 pb-3">
                <div class="col-md-3 r-mr">
                    <CardHome 
                      src='images/vegan2.jpg'
                      text='Fasting Foods'
                      class='veg'
                    />
                </div>
                <div class="col-md-3 r-mr">
                    <CardHome 
                      src='images/kitfo.jpg'
                      text='Non-Fasting Foods'
                      class='non-veg'
                    />
                </div>
                <div class="col-md-3 r-mr">
                    <CardHome 
                      src='images/breakfast2.jpg'
                      text='Breakfast'
                      class='b-fast'
                    />
                </div>
                </div>
                <div class="row">
                <div class="col-md-3 r-mr">
                    <CardHome 
                      src='images/fast-food.jpg'
                      text='Fast-Foodd'
                      class='f-food'
                    />
                    </div>
                <div class="col-md-3 r-mr">
                    <CardHome 
                      src='images/home-1.jpg'
                      text='Main Dishes'
                      class='f-food'
                    />
                </div>
            </div>

            <h1 class="titles mr-5 mt-5 ">DRINKS</h1>
            <div class="row">
                <div class="col-md-3 r-mr">
                        <CardHome 
                        src='images/alc.jpg'
                        text='Alcoholic'
                        class='alcoholic'
                        />
                </div>

                <div class="col-md-3 r-mr">
                    <CardHome 
                      src='images/cofee-3.jpg'
                      text='Non-Alcoholic'
                      class='n-alcoholic'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeCards

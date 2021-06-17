import React from 'react';
import './RecipeTitle.css';
import { useState, useEffect } from "react";


function RecipeTitle() {
    const [recipe, setRecipe] = useState([{}]);
    var recipe_id = localStorage.getItem("recipe_id");
  
  useEffect(() => {
    fetch(`/GetAllTempData/${parseInt(recipe_id)}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.log(error));
  }, []);
    return (

        <>
        <div className="container title-box mt-5 p-5">
        <div className="row">
            <div className="col-md-9">
                <div className="recipe-title">
                    <p className="title-text">Doro Wat (spicy ethiopian chicken stew)</p>
                    <p className="rec-desc"><span className="mr-2">By Chef Melat</span> | <span className="ml-2 mr-2">Gebeta</span>  | <span className="ml-2">May 2018</span> </p>
                </div>
            </div>
            <div className="col-md-1 title-addons">
                <p className="revs">4/4</p>
                <p className="">reviews(4)</p>
            </div>
        </div> 
    </div>
        </>
    )
}

export default RecipeTitle

import React from "react";
import { useState, useEffect } from "react";

function Test() {
  const [recipes, setRecipes] = useState([{}]);

  useEffect(() => {
    fetch("/allRecipe")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(error => console.log(error))
  }, []);  


  return (
  <div>
    {recipes.map(recipe => (
      <div key={recipe.recipe_ID}>
      <h1>{recipe.Recipe_title}</h1>
      <p>{recipe.Description}</p>
      </div>
  ))} 
  </div>
  );
}

export default Test;

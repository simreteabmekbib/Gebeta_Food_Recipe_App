import React from "react";
import RecipeTitle from "../RecipeTitle";
import RecipeDetails from "../RecipeDetails";
import Review from "../Review";

function Recipe() {
  return (
    <>
      <RecipeTitle />
      <div className="container w-75">
        <RecipeDetails />
        <Review />
      </div>
    </>
  );
}

export default Recipe;

import React,{useState} from 'react';
import '../Foods.css';
import Button from "../Button";

var id;
function Foods() {
  const [recipes, setRecipes] = useState([{}]);

    return (
      <>
        <div id="category" class="">
        
        <Button  onClick={() => {console.log("Hi")
          fetch("/category/breakfast")
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.log(error));}} class="btn-info" text="breakfast" />

        <Button  onClick={() => {console.log("Hi")
          fetch("/category/main dish")
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.log(error));}} class=" btn-info" text="main"  />

        <Button  onClick={() => {console.log("Hi")
          fetch("/category/fasting")
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.log(error));}} class=" btn-info" text="fasting"  />

        <Button  onClick={() => {console.log("Hi")
          fetch("/category/non-fasting")
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.log(error));}} class=" btn-info" text="non-fasting"  />

        <Button  onClick={() => {console.log("Hi")
          fetch("/category/fast food")
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.log(error));}} class=" btn-info" text="Fast-Food"  />

       </div>
       <div className="row">
       {recipes.map((recipe) => (
              <div key={recipe.recipe_ID} className='col-5'>
                {id = recipe.recipe_ID}
               <h1 >{recipe.Recipe_title}</h1>
                  <img src={recipe.recipe_img_link} style={{ width: '100%' }} />
                  <button className='btn btn-primary' id='btn'>Get This Recipe</button>
                  
               
              </div>
            ))}
       </div>
       
      </>
    )}

export default Foods
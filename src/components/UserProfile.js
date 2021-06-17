import React from "react";
import "./UserProfile.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

var id ;
function UserProfile() {
  const [recipes, setRecipes] = useState([{}]);

  
  useEffect(() => {
    fetch("/allRecipe")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);
 const open = ()=>{window.location.replace("/recipe")
 localStorage.setItem("recipe_id", id)
}

  return (
    <div>
      <center>
        <Link style={{ fontSize: "30px" }} to="/chef" className="">
          Add a Recipe
        </Link>
      </center>
      <nav style={{ height: "150vh", marginTop: "-7%" }} id="sidebar2">
        <div class="p-4 pt-5">
          <a
            href="#"
            class="img logo rounded-circle mb-5"
            style={{ backgroundImage: "url(" + "/images/doro.jpg" + ")" }}
          ></a>

          <ul class="list-unstyled components mb-5">
            <li class="active">
              <Link to="UserProfile" className="">
                All Recipes
              </Link>
            </li>

            <li>
              <Link to="collection" className="">
                Your Collection
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div id="content" class="pl-4 p-md-5 mt-5">
        
            <div style={{ marginTop: "-80%",backgroundColor: 'rgb(255, 246, 235)',width: '70%',marginLeft:'30%'}} className="row d-flex justify-content-around">
            {recipes.map((recipe) => (
              <div key={recipe.recipe_ID} className='col-5'>
                {id = recipe.recipe_ID}
               <h1 >{recipe.Recipe_title}</h1>
                  <img src={recipe.recipe_img_link} style={{ width: '100%' }} />
                  <button className='btn btn-primary' id='btn' onClick={open}>Get This Recipe</button>
                  
               
              </div>
            ))}
            

          </div>
        
      </div>
    </div>
    
  );
  
}

export default UserProfile;
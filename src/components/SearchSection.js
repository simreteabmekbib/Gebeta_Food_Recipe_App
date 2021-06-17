import React, { useState, useEffect } from "react";
import "./SearchSection.css";
var clicked = false;

function SearchSection() {
    const [search_term, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([{}]);
    
    useEffect(() => {

    }, []);
   function func1() {
        console.log("Hi")
        clicked = true;
        fetch(`/users/search/${search_term}`)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.log(error));
    }
    
    return (
        
        <div>
            <img
                src="/images/breakfast2.jpg"
                className="img-fluid r-home"
                alt="Different Ethiopian Foods"
            ></img>
            <div className="r-centered1">
                {" "}
                <p className="find_rec"> Find a Recipe</p>
            </div>
            <div className="r-centered">
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search_box"
                />

                <button
                    type="button"
                    onClick={func1}
                    className="search_btn"
                >
                    <i className="fas fa-search icon"></i>
                </button>
            </div>


            {clicked == true? recipes.map((recipe) => (
        <div key={recipe.recipe_ID}>
            <div className="row" style={{height: '15%', width: '60%', marginLeft: '5%' }}>
                <div className='col-2 d-flex justify-content-center' style={{}}>
                    <img src={recipe.recipe_img_link} style={{ width: '100%', height: '100%',borderBottom: '1px solid black' }} />
                </div>
                <div className="col-5" style={{ backgroundColor:'rgb(255, 246, 235)',borderBottom: '1px solid black' }}> <h1>{recipe.Recipe_title}</h1></div>
                <div className="col-4">
                    <button className='btn btn-primary' style={{ marginTop: '5%', marginLeft: '-6%', marginBottom: '-32%',borderBottom: '1px solid black' }} id='btn'>Get This Recipe</button>
                </div>
            </div>
        </div>
    )) : (<div></div>)}

        </div>
    );
}

export default SearchSection;
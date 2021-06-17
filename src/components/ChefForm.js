import React, { useState }  from "react";
import "./ChefForm.css";
import TextInput from "./TextInput";
import Button from "./Button"

var ingredient_Name = []
var unit = []
var quantity = []
var step_number = []
var instruction = []
const addIngredient = (e) => {
  const ul = document.getElementById("dynamic_list");
  var ingredient = document.getElementById("ingredient");
  var quantity1 = document.getElementById("quantity");
  var unit1 = document.getElementById("unit");

  //var ingredient2 = document.getElementById("ingredient2");
  var li = document.createElement("li");
  //li.setAttribute('id',ingredient1.value);
  var input1 = document.createElement("input");
  input1.classList.add("inp1");
  input1.value = ingredient.value;
  input1.name = "ingredient";
  input1.id = ingredient.value;
  li.appendChild(input1);
  ingredient_Name.push(input1.value);
  console.log(ingredient_Name)
  var input2 = document.createElement("input");
  input2.name = "quantity";
  input2.value = quantity1.value;
  input2.id = quantity1.value;
  li.appendChild(input2);
  quantity.push(input2.value)
  console.log(quantity)
  var input3 = document.createElement("select");
  input3.classList.add("input3");
  var array = [
    "teaspoon",
    "cup",
    "gram",
    "kg",
    "litre",
    "gallon",
    "dozen",
    "lbs",
    "tablespoon",
  ];
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    input3.id = array[i];
    input3.name = "unit";
    input3.appendChild(option);
    
  }
  var value1 = unit1.value;
  var ops = input3.options;
  for (var opt, j = 0; (opt = ops[j]); j++) {
    if (opt.value == value1) {
      input3.selectedIndex = j;
      break;
    }
  }

  li.appendChild(input3);
  unit.push(input3.value);
  console.log(unit)
  //remove link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item";
  link.innerHTML = '<i style="color:red;" class="fa fa-remove"></i>';

  li.appendChild(link);
  //li.appendChild(document.createTextNode(ingredient2.value));
  ul.appendChild(li);
  ingredient.value = "";
  quantity1.value = "";
  unit1.value = "";
};

const addIngredient2 = (e) => {
  var ul2 = document.getElementById("preparation_list");
  var select = document.getElementById("select");
  var steps = document.getElementById("steps");
  var prep_btn = document.getElementById("prep_btn");

  //var ingredient2 = document.getElementById("ingredient2");
  var li = document.createElement("li");
  //li.setAttribute('id',ingredient1.value);
  var input1 = document.createElement("input");
  input1.value = select.value;
  input1.name = "select";
  input1.classList.add("input1");
  input1.id = select.value;
  li.appendChild(input1);
  step_number.push(input1.value)
  console.log(step_number)

  var input2 = document.createElement("input");
  input2.classList.add("input2");
  input2.name = "steps";

  input2.value = steps.value;
  input2.id = steps.value;
  li.appendChild(input2);
  instruction.push(input2.value)
  console.log(instruction)
  //remove link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item";
  link.classList.add("del-item");
  link.innerHTML = '<i style="color:red;" class="fa fa-remove ml-5 pl-5"></i>';

  li.appendChild(link);
  //li.appendChild(document.createTextNode(ingredient2.value));
  ul2.appendChild(li);
  select.value = "";
  steps.value = "";
};

// Remove Ingredient function definition
const removeTask = (e) => {
  console.log("yep");
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("yep del");
    e.target.parentElement.parentElement.remove();
  }
};

// Remove Ingredient function definition
function removeTask2(e) {
  console.log("yep");
  if (e.target.parentElement.classList.contains("delete-item")) {
      console.log("yep del");
      e.target.parentElement.parentElement.remove();
      
  }
}

//ul.addEventListener("click", removeTask);
//add_btn.addEventListener("click", addIngredient);

function ChefForm(props) {
  const [Recipe_title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Serving_Quantity, setServing] = useState("");
  const [total_time, setTotalTime] = useState("");
  const [recipe_img_link, setFile] = useState("");
  const [Tempvidio_link, setVideo] = useState("");
  const [ingredient2, setIngName] = useState("");
  const [quantity2, setQuantity] = useState("");
  const [unit2, setUnit] = useState("");
  const [step_number2, setStep] = useState("");
  const [instruction2, setInstraction] = useState("");
  const [dish_type, setDishType] = useState("");
  const [course_meal, setMeal] = useState("");
  const [season, setSeason] = useState("");
  var user_id = localStorage.getItem("user_id");

return (
    <>
      <form>
        <div className="container1 container mt-5 text-center">
          <h2 className="title">ADD YOUR RECIPE</h2>
          <input onChange={e => setTitle(e.target.value)} placeholder="title" label="Recipe title*" />
          <input onChange={e => setDescription(e.target.value)} placeholder="description" label="Description*" />
          <div className="d-flex formBox ">
            <div
              className="servings-times quantity inputsHalf"
              id="servings-times"
            >
              <label htmlFor="servingSize">Serving Quantity</label>
              <select onChange={e => setServing(e.target.value)} id="servingQuantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
              </select>
            </div>

            <div className="servings-times inputsHalf" id="servings-times4">
              <label htmlFor="totalTime" style={{ marginRight: "38%" }}>
                Total Time
              </label>
              <br />
              <span id="totalTimeTip">
                <span data-reactroot="">
                  <a className="toolTip"></a>
                </span>
              </span>
              <input
              onChange={e => setTotalTime(e.target.value)}
                id="totalTime"
                className="inputs"
                placeholder="hour:minute"
              ></input>
            </div>
          </div>

<div className="row">
            <div className="col">
              <center>
                <img
                  className="mt-3"
                  id="imgview"
                  height="150px"
                  width="150px"
                  src="/images/breakfast2.jpg"
                />
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
              onChange={e => setFile(e.target.value)}
                type="file"
                className="w-75 ml-5 ml-3 mt-3"
                id="FileUpload1"
              />
            </div>
          </div>
          <input
          onChange={e => setVideo(e.target.value)}
            id="video_link"
            className=" inputs w-75 ml-0 pl-0 mt-3"
            placeholder="video link"
          />
          <hr style={{ width: "85%", marginLeft: "45px" }} />
          <h2
            style={{
              textAlign: "left",
              marginLeft: "45px",
              marginBottom: "20px",
            }}
          >
            INGREDIENTS
          </h2>
          <div className="form-group" style={{ textAlign: "left" }}>
            <label className="inputs" htmlFor="name">
              Ingredient(s)*
            </label>
            <br />
            <ul onClick={removeTask} className="ml-2" id="dynamic_list"></ul>
            <input
            onChange={e => setIngName(e.target.value)}
              type="text"
              className="form-control inputs"
              id="ingredient"
              placeholder="title"
            />
          </div>
          <div className="formBox clearfix">
            <div className="servings-times inputsHalf" id="servings-times5">
              <label htmlFor="ingredientQuantity">Quantity*</label>
              <br />
              <span>
                <span>
                  <a className="toolTip"></a>
                </span>
              </span>
              <input
                onChange={e => setQuantity(e.target.value)}
                id="quantity"
                type="text"
                maxLength="150"
                placeholder="eg., 2, 1 1/3, .5"
              />
            </div>
            <div className="servings-times inputsHalf" id="servings-times2">
              <label htmlFor="servingSizeUnit" style={{ marginRight: "53%" }}>
                Unit
              </label>
              <div id="servingSizeUnit">
                <div className="selectStyled">
                  <select onChange={e => setUnit(e.target.value)} id="unit">
                    <option value="teaspoon">teaspoon</option>
                    <option value="cup">cup</option>
                    <option value="gram">gram</option>
                    <option value="kg">kg</option>
                    <option value="litre">litre</option>
                    <option value="gallon">gallon</option>
                    <option value="dozen">dozen</option>
                    <option value="lbs">lbs</option>
                    <option value="tablespoon">tablespoon</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button
            id="add-btn"
            type="button"
            style={{ marginTop: "3%", width: "25%" }}
            className="btn btn-primary"
            onClick={addIngredient}
          >
            ADD INGREDIENT
          </button>

          <hr style={{ width: "85%", marginLeft: "45px" }} />

          <h2
            style={{
              textAlign: "left",
              marginLeft: "45px",
              marginBottom: "20px",
            }}
          >
            PREPARATION
          </h2>
          <ul onClick={removeTask2} id="preparation_list"></ul>

<div className="form-group" style={{ textAlign: "left" }}>
            <label className="inputs" htmlFor="name">
              Step Number*
            </label>
            <div className="selectStyled">
              <input
              onChange={e => setStep(e.target.value)}
                className="ml-5"
                id="select"
                placeholder="step number"
                type="text"
                maxLength="150"
              />
            </div>
            <br />
            <label className="inputs" htmlFor="steps">
              Instruction*
            </label>
            <input
            onChange={e => setInstraction(e.target.value)}
              id="steps"
              placeholder="step eg., Enter ingredients step…"
              className="form-control inputs"
              type="text"
              maxLength="150"
            />
          </div>
          <button
            id="prep_btn"
            onClick={addIngredient2}
            type="button"
            style={{ marginTop: "3%", width: "32%" }}
            className="btn btn-primary"
          >
            ADD PREPARATION STEP
          </button>

          <hr style={{ width: "85%", marginLeft: "45px" }} />
          <h2
            style={{
              textAlign: "left",
              marginLeft: "45px",
              marginBottom: "20px",
            }}
          >
            DETAILS
          </h2>

          <div className="form-group" style={{ textAlign: "left" }}>
            <label className="inputs" htmlFor="name">
              Type of dish
            </label>
            <br />
            <select onChange={e => setDishType(e.target.value)} id="dish" className="inputs form-control" name="dish">
              <option value="stew">stew</option>
              <option value="bread">bread</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="form-group" style={{ textAlign: "left" }}>
            <label className="inputs" for="name">
              Course meal
            </label>
            <br />
            <select onChange={e => setMeal(e.target.value)} id="meal" className="inputs form-control" name="meal">
              <option value="fast-food">fast food</option>
              <option value="main-dish">main dish</option>
              <option value="breakfast">breakfast</option>
              <option value="breakfast">Alcoholic</option>
              <option value="breakfast">Non-Alcoholic</option>
            </select>
          </div>
          <div className="form-group" style={{ textAlign: "left" }}>
            <label class="inputs" for="name">
              Season
            </label>
            <br />
            <select onChange={e => setSeason(e.target.value)}id="season" className="inputs form-control" name="season">
              <option value="fasting">fasting</option>
              <option value="non-fasting">non-fasting</option>
            </select>
          </div>
          <Button
          onClick = { async()=> {
          const recipe= {Recipe_title, Description, Serving_Quantity, total_time,recipe_img_link, Tempvidio_link, dish_type, course_meal, season, step_number, instruction, ingredient_Name, quantity,  unit};
          console.log(season);
          const response=await fetch(`/postAllTempRecipe/${parseInt(user_id)}`, {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(recipe)
           })
           console.log(recipe)
          if (response.ok){
            
          }}}
            id="Button1"
            style={{ marginTop: "3%", width: "25%" }}
            class="btn btn-primary mb-3"
          
           text="Add Recipe" 
          />
        </div>
      </form>
    </>
  );
}

export default ChefForm;
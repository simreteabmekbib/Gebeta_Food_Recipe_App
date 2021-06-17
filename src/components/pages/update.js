import './admin_content.css'
import './admin_newRecpie.css'
import React from 'react'

function update() {
    return (
        <>
        <div className='dashboard'>
           <h1> Update Recpie</h1> 
        </div>

        <div className="container">
            <div className="content">
                <div className="row">
                    <div class="col-sm-3">
                        <form>
                            <div className="form-group">
                                <label for="inputId">Recpie Id:</label>
                                <input type="text" className="form-control input" id="id"  placeholder="Id"/>
                            </div>
                        </form>
                    </div>
                </div>

                <form>
                    <div className="form-group">
                        <label for="inputTitle">Recpie Title:</label>
                        <input type="text" className="form-control input" id="title"  placeholder="title"/>
                        
                        </div>
                </form>
                    
                    
                <form>
                    <div className="form-group">
                        <label for="inputDescription">Recepie Description:</label>
                        <textarea type="text" className="form-control input" id="description"  placeholder="Description" rows="3">
                        </textarea>
                        </div>
                </form>
                    
                    
                <form>
                    <div className="form-group">
                        <label for="inputQuantity">Serving Quantity:</label>
                        <input type="text" className="form-control input" id="quantity"  placeholder="serving quantnty"/>
                        
                        </div>
                </form>

                <form>
                    <div className="form-group">
                        <label for="inputTime">Total cooking time:</label>
                        <input type="text" className="form-control input" id="time"  placeholder="total cooking time"/>
                        
                        </div>
                </form>
                    
                    
                <form>
                    <div className="form-group">
                        <label for="inputUrl">Image URL:</label>
                        <input type="text" className="form-control input" id="imageUrl"  placeholder="image url"/>
                        
                        </div>
                </form>

                <hr/>
                       
                {/* <!-- display recpie detail --> */}
                <div class="row rowspace">
                    <h2> Recpie Detail</h2>    
                </div>

                <div className="form-group">
                    <label for="selectDish"> Type of Dish</label>
                    <select className="form-control" id="dish">
                        <option value="stew">stew</option>
                        <option value="bread">bread</option>
                        <option value="other">other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="selectMeal">Course Meal</label>
                    <select className="form-control" id="meal">
                        <option value="fast-food">fast-food</option>
                        <option value="main-dish">main dish</option>
                        <option value="breakfast">breakfast</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="selectSeason">Season</label>
                    <select className="form-control" id="season">
                        <option value="fasting"> fasting </option>
                        <option value="non-fasting"> non-fasting</option>
                    </select>
                </div>
                <hr/>

                <div className="row rowspace">
                    <div className="col-sm-3 clo">
                        <button className="btn"> Update </button>
                    </div>
                    <div className="col-sm-3 clo">
                            <button className="btn"> Delete </button>
                        </div>
                </div>
            
            </div>
        </div>


        
        </>
        
    )
}

export default update

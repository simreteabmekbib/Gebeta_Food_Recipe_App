import React from 'react';
import Button from './Button';
import './Review.css';

function Review() {
    return (
        <div className="reviews ps-3 mt-3 pt-3">
            <h3 className="h3">leave a review</h3>
            <div className="bold-hr"></div>
            <div className="review"><textarea className="form-control mt-4" placeholder="Write Your Review" style={{height:"50px"}}></textarea></div>

            <form>
          <label for="rate">Rating:</label>
          <select id="rate" name="cars">
            <option value="1">1/5</option>
            <option value="2">2/5</option>
            <option value="3">3/5</option>
            <option value="4">4/5</option>
              <option value="5">5/5</option>
          </select>
  
        </form>
            <Button class="btn btn-primary" text="Review"/>
            <p style={{color:"red"}}>You have to login to give a review!</p>
            <h3 className="h3 pt-5">reviews</h3>
            <p style={{color:"brown"}}>No reviews yet</p>

            <div className="bold-hr"></div>

            <div className="row">
                <div className="col-1 rev-stars mt-5 me-0 pe-0">
                    <p className="rev-star">4/5</p>
                </div>
                <div className="col-11 ms-0 ps-0">
                    <p className="rev-text pt-4 mb-1"> ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus ipsum laborum, inventore pariatur quo deleniti sequi similique assumenda corrupti modi facilis molestias aliquam! Minus voluptatum veniam expedita magnam quis!</p>
                    <p className="username pt-0 mt-0">someone</p>
                </div>
                
            </div>
            <hr/>

            <div className="row">
                <div className="col-1 rev-stars mt-5 me-0 pe-0">
                    <p className="rev-star">3/5</p>
                </div>
                <div className="col-11 ms-0 ps-0">
                    <p className="rev-text pt-4 mb-1"> ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus ipsum laborum, inventore pariatur quo deleniti sequi similique assumenda corrupti modi facilis molestias aliquam! Minus voluptatum veniam expedita magnam quis!</p>
                    <p className="username pt-0 mt-0">someone</p>
                </div>
                
            </div>
            <hr/>

            <div class="row">
                <div class="col-1 rev-stars mt-5 me-0 pe-0">
                    <p class="rev-star">2/5</p>
                </div>
                <div class="col-11 ms-0 ps-0">
                    <p class="rev-text pt-4 mb-1"> ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus ipsum laborum, inventore pariatur quo deleniti sequi similique assumenda corrupti modi facilis molestias aliquam! Minus voluptatum veniam expedita magnam quis!</p>
                    <p class="username pt-0 mt-0">someone</p>
                </div>
                
            </div>
            <hr/>
            
        </div>
    )
}

export default Review

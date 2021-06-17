import React,{useState} from 'react';
import './Collection.css';
import Button from "./Button";
import { Link } from 'react-router-dom';

function Collection() {
    return (
      <>
      <center>
      </center>
      <nav style={{height:"150vh", marginTop:"-5%"}} id="sidebar2">
				<div class="p-4 pt-5">
		  		<a href="#" class="img logo rounded-circle mb-5" style={{backgroundImage: "url(" + "/images/doro.jpg" + ")"}}></a>
          
	        <ul class="list-unstyled components mb-5">
	          <li>
              
	            <Link to="/UserProfile" className="">All Recipes</Link>
      
	          </li>
            
	          <li class="active">
              <Link to="/collection" className="">Your Collection</Link> 
	       </li>
          </ul>

	      </div>
    	</nav>

      </>
    )}

export default Collection;
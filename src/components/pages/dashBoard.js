import './admin_content.css'
import './admin_newRecpie.css'
import React from 'react'

function dashBoard() {
    return (
        <>
        <div className='dashboard'>
           <h1> dash board</h1> 
        </div>

        <div className="cardBox">
            <div className="card">
                <div>
                    <div className="numbers"> 1,452</div>
                    <div className="cardName"> Users</div>
                </div>
                <div className="iconBox">
                    <i className="fas fa-users" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="numbers"> 150</div>
                <div className="cardName"> Chef</div>
                </div>
                <div className="iconBox">
                    <i className="fas fa-utensils" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="numbers"> 20,000</div>
                <div className="cardName"> Recpies</div>
                </div>
                <div className="iconBox">
                    <i className="fas fa-cookie" aria-hidden="true"></i>
                </div>
            </div>
        </div>

        <div className="details">
            <div className="newRecpies">
                <div className="cardHeader">
                    <h2> New Recipies</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td> Recpie name</td>
                            <td> Catagorie</td>
                            <td> Type of Dish</td>
                            <td> Display</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> melewa</td>
                            <td> non fasting</td>
                            <td> fast food</td>
                            <td><span class="viewDetail"><a href="./assets/other_pages/admin_newRecepieList.html" class="bttn"> view detail</a></span></td>
                        </tr>
                        <tr>
                            <td> melewa</td>
                            <td> non fasting</td>
                            <td> fast food</td>
                            <td><span class="viewDetail"><a href="./assets/other_pages/admin_newRecepieList.html" class="bttn"> view detail</a></span></td>
                        </tr>
                        <tr>
                            <td> melewa</td>
                            <td> non fasting</td>
                            <td> fast food</td>
                            <td><span class="viewDetail"><a href="./assets/other_pages/admin_newRecepieList.html" class="bttn"> view detail</a></span></td>
                        </tr>
                        <tr>
                            <td> melewa</td>
                            <td> non fasting</td>
                            <td> fast food</td>
                            <td><span class="viewDetail"><a href="./assets/other_pages/admin_newRecepieList.html" class="bttn"> view detail</a></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            


        </div>



        </> 
    )
}

export default dashBoard

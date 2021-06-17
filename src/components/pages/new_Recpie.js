import './admin_content.css'
import './admin_newRecpie.css'
import React from 'react'

function new_Recpie() {
    return (
        <>
        <div className='dashboard'>
           <h1> new recpie </h1> 
        </div>
        
        
        <div className="container">
            <div className="content">

                <div className="row rowspace">
                    <label className="label"> Recpie Title: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label className="display"> display discription</label>
                </div>
                <div className="row rowspace">
                    <label className="label"> Recpie Description: </label>                   
                </div>
                <div className="row rowspace">
                    <div className="card disc" >
                        <div className="card-body">
                            <p className="display"> display discription</p>
                        </div>

                    </div>
                </div>

                <div className="row rowspace">
                    <div className="col-sm">
                        <div className="row">
                            <label className="label"> Serving Quantity:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="display"> display discription</label>
                        </div>
                        <div className="row rowspace">
                            <label className="label"> Total Cooking Tme: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="display"> display discription</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src="..." alt="Card image cap"/>
                            </div>

                        </div>

                    </div>
                </div>

                <hr/>
                    
                
                <div className="row rowspace">
                    <h2> Ingriedents</h2>    
                </div>
                <div className="row ">
                    <div className="col-sm border">
                        <label className="label"> Ingriedents </label>
                        
                    </div>
                    <div className="col-sm border">
                        <label className="label"> Quantity </label>
                        
                    </div>
                    <div className="col-sm border">
                        <label className="label"> Unit </label>

                    </div>
                </div>

                <div className="row ">
                    <div className="col-sm border">
                        
                        <label className="display"> display ingriedents</label>
                    </div>
                    <div className="col-sm border">
                        
                        <label className="display"> display quantity</label>
                    </div>
                    <div className="col-sm border">
                        
                    <label className="display"> display unit</label>
                    </div>
                </div>

                <hr/>

                {/* <!-- display recpie step --> */}
                <div className="row rowspace">
                    <h2> Preparation Step</h2>    
                </div>
                <div className="row ">
                    <div className="col-sm-2 border">
                        <label className="label"> Steps </label>
                        
                    </div>
                    <div className="col-sm-10 border">
                        <label className="label"> Preparation Method </label>
                        
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2 border">
                        
                        <label className="display"> display steps</label>
                    </div>
                    <div className="col-sm-10 border">
                        
                        <label className="display"> display Preparation Method</label>
                    </div>
                </div>

                <hr/>

                
                <div className="row rowspace">
                    <h2> Recpie Detail</h2>    
                </div>

                <div className="row rowspace">
                    <div className="col-sm-6">
                        <div className="row rowspace">
                            <label className="label"> Type of dish: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="display"> display type</label>
                        </div>
                        <div className="row rowspace">
                            <label className="label"> Couese meal: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="display"> display meal course</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row rowspace">
                            <label className="label"> Season: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="display"> display season</label>
                        </div>
                        <div className="row rowspace">
                            <label className="label"> Prepration Method: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="display">preparation method</label>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row rowspace">
                    <div className="col-sm-3 clo">
                        <button className="btn"> Accept </button>
                    </div>
                    <div className="col-sm-3 clo">
                        <button className="btn"> Deny</button>
                    </div>
                </div>


            </div>
        </div>
        </>
        
    )
}

export default new_Recpie

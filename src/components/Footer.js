import React,{useState} from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <>
 <div style={{marginTop:"20%", padding:"5%"}} className="pt-5 footer">
    <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xs-12 about-company">
                    <h2>Gebeta</h2>
                    <p className="pr-5 " id="parah">Place where you can get the recipies of delcious Ethiopian cuzine.</p>
              </div>
              <div className="col-lg-3 col-xs-12">
                    <h4 className="mt-lg-0 mt-sm-3">Follow Us</h4>
                    <p className="pt-2">
                           <a href="#"><i className="fab fa-instagram mr-2 icons rounded-circle"></i></a>
                            <a href="#"><i className="fab fa-facebook mr-2 icons rounded-circle"></i></a>
                            <a href="#"><i className="fab fa-linkedin mr-2 icons rounded-circle"></i></a> 
                    </p>
                    <p className=" mt-3"><small>© 2021. All Rights Reserved.</small></p>
              </div>
              <div className="col-lg-4 col-xs-12 location pl-5">
                    <h4 className="mt-lg-0 mt-sm-4">Contact Info</h4>
                    <p className="mb-0"><i className="fa fa-envelope-o mr-3 icons-2 mb-3"></i>Gebeta@gmail.com</p>
                    <p className="mb-0"><i className="fa fa-phone mr-3 icons-2"></i>(+251) 984-2022</p>
              </div>
              </div>
    </div>
    </div>
    </>
  );
}

export default Footer;
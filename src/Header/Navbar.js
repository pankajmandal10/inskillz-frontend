import React from 'react'
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {Link} from "react-router-dom";
import Inskills from "../image/Group174.png"
import Searchbox from "./Searchbox"
import NavLogin from '../Courses/DigitalMarketing/Enroll/navLogin';

export default function Navbar () {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div className="inskillzNav" >
        <NavLogin handleClose={handleClose} open={open}></NavLogin>
        <div className="beta uk-visible@s">This site is under Development , some functionalities may not work properly.</div>
          <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#3583c5", opacity:"1"}}>
            <div className="containerNav">
              <Link  to="/"><img className="inskill logo" src={Inskills} /></Link>
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <input className="search" type="search" placeholder="Search" aria-label="Search" /> */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Searchbox />
              
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{fontSize:"18px",padding: "0px 4vw"}}>
                  <li className="nav-item-1">
                   <Link className="nav-link" to="/courses" >Courses</Link>
                 </li>
                 <li className="nav-item-2 ">
                   <Link className="nav-link" to="/curx">Teach On Inskills </Link>
                 </li>
                 <li className="nav-item-3 ">
                  <Link className="nav-link" to="/profile-details">Contact</Link>
                 </li>
                </ul>
                <div className="d-flex">
                 <button onClick={handleClickOpen} className="butt" >Login / Signup</button>
                </div>
              </div>
           </div>
         </nav>
        </div>
    )
}

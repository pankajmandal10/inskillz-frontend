import React from 'react'
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import Inskills from "../Assets/image/Group174.png"
import Searchbox from "./Searchbox"
import NavLogin from '../../Courses/DigitalMarketing/Enroll/navLogin';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'

import { userLogout } from "../../Store/actions/userActions";

export default function Navbar() {
  //init
  const dispatch= useDispatch()
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [login,setLogin]= React.useState(JSON.parse(localStorage.getItem('login')))
  // const login = localStorage.getItem("login") ? JSON.parse(localStorage.getItem('login')) : false

  const { userInfo} =  useSelector(state => state.user.login)

  const handleClickOpen = () => {
    
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
    dispatch(userLogout())
    history.push('/');
  };


  return (
    <div className="inskillzNav" >
      <NavLogin handleClose={handleClose} open={open} />
      <div className="beta uk-visible@s">This site is under Development , some functionalities may not work properly.</div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ background: "#3583c5", opacity: "1" }}>
        <div className="containerNav">
          <Link to="/"><img className="inskill logo" src={Inskills} /></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <input className="search" type="search" placeholder="Search" aria-label="Search" /> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Searchbox />

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
             
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ fontSize: "18px", paddingLeft: "4vw" }}>
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
            {
              !userInfo &&
              <div className="d-flex">
                <button onClick={handleClickOpen} className="butt" >Login / Signup</button>
              </div>
            }
            
            {
              userInfo &&
              <div>
                <button class=" uk-flex navDrop" type="button"><img style={{ height: '25px' }} className="uk-border-circle" src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1443584492/vosgqpvicpjgknz2rn2l.png"></img><span  style={{marginTop:'1px'}}>John Doe</span><i className="fas fa-caret-down fa-lg "></i></button>
                <div onClick={logout} uk-dropdown="mode: click; pos: bottom-right"><h6>Logout</h6></div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

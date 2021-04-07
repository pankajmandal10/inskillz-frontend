import React, { Component } from 'react'
import imag1 from "../Image/imag1.png"
import "./index.css"
import icons1 from "../Image/icons1.svg";
import icons2 from "../Image/icons2.svg";
import clock from "../Image/clock.svg";
import icons3 from "../Image/icons3.svg";
import Buttons from "./Buttons";
import pdf from "../Image/pdf.svg"


import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

import Batches from './Enroll/Batches'
import { Link } from 'react-router-dom'
import Enroll from './Enroll/EnrollCourse'
import StudentLogin from './Enroll/StudentLogin';
import ViewProgress from './Enroll/ViewProgress';
import { useDispatch, useSelector} from 'react-redux'



export default function Header() {
  const [value, setValue] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [enrol, setEnrol] = React.useState(false);
  const [stdLogin, setStdLogin] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  const login = localStorage.getItem("login")? JSON.parse(localStorage.getItem('login')):false
 
  const { userInfo} =  useSelector(state => state.user.login)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenEnrol = () => {
    setEnrol(true);
  };
  const handleClickOpenStdLogin = () => {
    setEnrol(false);

    setStdLogin(true);
  };
  const progressOpen = () => {
    setProgress(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEnrol(false);
    setStdLogin(false);
    setProgress(false);
  };
  const batchEnroll = () => {
    setOpen(false);
    setEnrol(true);

  }
  console.log(login);
  return (

    <div >
      <ViewProgress handleClose={handleClose} open={progress}></ViewProgress>
      <Batches enrol={batchEnroll} handleClose={handleClose} open={open}></Batches>
      <Enroll modalOpen={handleClickOpenStdLogin} handleClose={handleClose} open={enrol}></Enroll>
      <StudentLogin handleClose={handleClose} open={stdLogin}></StudentLogin>
      <img className="marketing-img" src={imag1} />
      <div className="container">
        <p className="header">Digital Marketing</p>
        <p className="marketing-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

        <div className="marketing-stars">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </div>
        <div className="bannerBtns uk-visible@s">
          <div className="marketing-buttons" >
            <Buttons name="22 Hours On Demand Videos" Group={icons1} />
          </div>
          <div className="marketing-buttons" >
            <Buttons name="Downloadable Resources" Group={icons2} />
          </div>
          <div className="marketing-buttons" >
            <Buttons name="Full Lifetime Access" Group={clock} />
          </div>
          <div className="marketing-buttons" >
            <Buttons name="Certification of Completion" Group={icons3} />
          </div>
        </div>
        <div className="bannerBtns uk-hidden@s">
          <div className="marketing-buttons" >
            <Buttons name="22 Hours On Demand Videos" Group={icons1} />
          </div>
          <div className="marketing-buttons" >
            <Buttons name="Downloadable Resources" Group={icons2} />
          </div>
        </div>
        <div className="bannerBtns2 bannerBtns3 uk-hidden@s">
          <div className="marketing-buttons" >
            <Buttons name="Full Lifetime Access" Group={clock} />
          </div>
          <div className="marketing-buttons" >
            <Buttons name="Certification of Completion" Group={icons3} />
          </div>
        </div>
        {!userInfo &&
          <div className="bannerBtns2 uk-visible@s">
            <button onClick={handleClickOpenEnrol} className="marketing-button" style={{ width: "247px", background: "#D3262A 0% 0% no-repeat padding-box", color: "#FFFFFF" }}> $300 Enroll Now </button>
            <button onClick={handleClickOpen} className="marketing-button" style={{ width: "160px", background: "#FFFFFF 0% 0% no-repeat padding-box" }}>View Batches</button>
            <button  className="marketing-button" style={{ width: "247px", background: "#FFFFFF 0% 0% no-repeat padding-box" }}><img className="uk-margin-small-right" src={pdf} />Download Brochure</button>
          </div>
        }
        {userInfo &&
          <div className="bannerBtns2 uk-visible@s">
            <Link to="curx">
              <button onClick={handleClickOpenEnrol} className="marketing-button" style={{ width: "247px", background: "#D3262A 0% 0% no-repeat padding-box", color: "#FFFFFF" }}> Continue Class </button>
            </Link>
            <button onClick={progressOpen} className="marketing-button" style={{ width: "247px", background: "#FFFFFF 0% 0% no-repeat padding-box" }}>View Progress</button>
          </div>
        }

        {/* mobile-buttons */}
        {!userInfo &&
          <div>
            <div className="bannerBtns2 uk-hidden@s">
              <button onClick={handleClickOpen} className="marketing-button" style={{ width: "110px", height: '35px', background: "#FFFFFF 0% 0% no-repeat padding-box" }}>View Batches</button>
              <button onClick={progressOpen} className="marketing-button" style={{ width: "190px", height: '35px', background: "#FFFFFF 0% 0% no-repeat padding-box" }}><img style={{ width: '15px' }} className="uk-margin-small-right" src={pdf} />Download Brochure</button>
            </div>
            <div className="bannerBtns2 bannerBtns4 uk-hidden@s">
              <button onClick={handleClickOpenEnrol} className="marketing-button" style={{ width: "310px", height: '35px', background: "#D3262A 0% 0% no-repeat padding-box", color: "#FFFFFF" }}> $300 Enroll Now </button>

            </div>
          </div>
        }
        {userInfo &&
          <div className="bannerBtns2 uk-hidden@s">
            <Link to="curx">
              <button onClick={handleClickOpenEnrol} className="marketing-button" style={{ width: "150px", background: "#D3262A 0% 0% no-repeat padding-box", color: "#FFFFFF" }}> Continue Class </button>
            </Link>
            <button onClick={handleClickOpen} className="marketing-button" style={{ width: "150px", background: "#FFFFFF 0% 0% no-repeat padding-box" }}>View Progress</button>
          </div>
        }

      </div>
    </div>
  )
}

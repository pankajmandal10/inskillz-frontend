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

import Enroll from './Enroll/EnrollCourse'
import StudentLogin from './Enroll/StudentLogin';
export default function Header() {
  const [value, setValue] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [enrol, setEnrol] = React.useState(false);
  const [stdLogin, setStdLogin] = React.useState(false);


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
  const handleClose = () => {
    setOpen(false);
    setEnrol(false);
    setStdLogin(false);

  };
  return (
    <div >
      <Batches handleClose={handleClose} open={open}></Batches>
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
        <div className="bannerBtns2 uk-visible@s">
          <button onClick={handleClickOpenEnrol} className="marketing-button" style={{  width: "247px", background: "#D3262A 0% 0% no-repeat padding-box", color: "#FFFFFF" }}> $300 Enroll Now </button>
          <button onClick={handleClickOpen} className="marketing-button" style={{  width: "160px", background: "#FFFFFF 0% 0% no-repeat padding-box" }}>View Batches</button>
          <button className="marketing-button" style={{  width: "247px", background: "#FFFFFF 0% 0% no-repeat padding-box" }}><img className="uk-margin-small-right" src={pdf} />Download Brochure</button>
        </div>
      </div>
    </div>
  )
}

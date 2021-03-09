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


export default function Header () {
    const [value, setValue] = React.useState(5);


        return (
            <div>
              <img className="marketing-img" src={imag1} />
              <p className="header">Digital Marketing</p>
              <p className="marketing-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

               <div className="marketing-stars">
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
              </Box>
              </div>

            {/*  <div className="marketing-buttons" style={{left: "97px"}}>
                <Buttons name="22 Hours On Demand Videos" Group={icons1} />
              </div>
              <div className="marketing-buttons" style={{left: "272px"}}>
                <Buttons name="Downloadable Resources" Group={icons2} /> 
              </div>
              <div className="marketing-buttons" style={{left: "447px"}}>
                <Buttons name="Full Lifetime Access" Group={clock}/> 
              </div>
              <div className="marketing-buttons" style={{left: "622px"}}>
                <Buttons name="Certification of Completion" Group={icons3}/> 
              </div>

              <button className="marketing-button" style={{left: "97px", width: "247px",background: "#D3262A 0% 0% no-repeat padding-box", color: "#FFFFFF"}}> $300 Enroll Now </button>
              <button className="marketing-button" style={{left: "358px", width: "160px",background: "#FFFFFF 0% 0% no-repeat padding-box"}}>View Batches</button>
              <button className="marketing-button" style={{left: "530px", width: "247px",background: "#FFFFFF 0% 0% no-repeat padding-box"}}><img src={pdf} />Download Brochure</button> */}
            </div>
        )
    }


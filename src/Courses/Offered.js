import React from 'react'
import "./Offered.css"
import imag1 from "./Image/imag1.png"

export default function Offered() {
    return (
        <div className="box" >
        <img className="img" src={imag1} />
        <p className="course-1">Courses Offered</p> 
        <p className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
        </div>
        
    )
}

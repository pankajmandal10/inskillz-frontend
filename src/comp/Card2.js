import React, { Component } from 'react'
import "./Selling.css"
import image2 from "../image/image2.png"
import star from "../image/star.svg";

export default class Card2 extends Component {
    render() {
        return (
          <div style={{height:"290px"}} >
           <img style={{width: "249px", height: "151px"}} alt='' src={image2} />
           <div className="corner"></div>
             <div className="card-head">
             <p className="name">Java to Javascript</p>
             <p className="instructor">By instructor Name</p>
             <img className="star" style={{width:"27%"}} src={star} />
             <span><img className="star" style={{width:"27%"}} src={star} /></span>
             <span><img className="star" style={{width:"27%"}} src={star} /></span>
             <span><img className="star" style={{width:"27%"}} src={star} /></span>
             <span><img className="star" style={{width:"27%"}} src={star} /></span>
             <span className="rate" style={{color:"#ffffff",fontSize: "10px"}}> 5.0</span>
             <span className="view">View Course</span>
            </div>
          </div>
        )
    }
}
import React, { Component } from 'react'
import "./Selling.css"
import image3 from "../image/image3.png"
import star from "../image/star.svg";
import star1 from "../image/star1.svg";

export default class Card1 extends Component {
    render() {
        return (
          <div className="slidercard" style={{height:"290px",width:"249px"}} >
            <img className="sliderimg" style={{width: "249px", height: "151px"}} alt='' src={image3} />
            <div className="corner"></div>
            <div className="card-head">
              <p className="name">Java to Javascript</p>
              <p className="instructor">By instructor Name</p>
              <img className="star" style={{width:"27%"}} src={star} />
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"26%"}} src={star1} /></span>
              <span className="rate" style={{color:"#ffffff", fontSize: "10px"}}> 5.0</span>
              <span className="view">View Course</span>
            </div>
          </div>
        )
    }
}

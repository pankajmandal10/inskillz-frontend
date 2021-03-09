import React, { Component } from 'react'
import "./Selling.css"
import image6 from "../image/image6.png"
import star from "../image/star.svg";

export default class Card4 extends Component {
    render() {
        return (
          <div style={{height:"290px",width:"249px"}} >
            <img style={{width: "249px", height: "161px"}} alt='' src={image6} />
            <div className="corner" style={{ marginTop: "-23px",position: "absolute"}}></div>
            <div className="card-head" style={{marginTop: "-14px"}}>
              <p className="name">Java to Javascript</p>
              <p className="instructor">By instructor Name</p>
              <img className="star" style={{width:"27%"}} src={star} />
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span className="rate" style={{color:"#ffffff",fontSize:"10px"}}> 5.0</span>
              <span className="view">View Course</span>
            </div>
          </div>
        )
    }
}
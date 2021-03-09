import React, { Component } from 'react'
import "./Selling.css"
import image4 from "../image/image4.png"
import star from "../image/star.svg";

export default class Card5 extends Component {
    render() {
        return (
            <div style={{width:"249px"}} >
                 <img style={{width: "249px", height: "151px"}} alt='' src={image4} />
                  <div class="card-head" style={{marginTop: "-8px"}}>
                    <p className="name">Knowledge is everything</p>
                    <p className="instructor">By instructor Name</p>
                    <img className="star" style={{width:"27%"}} src={star} />
                    <span><img className="star" style={{width:"27%"}} src={star} /></span>
                    <span><img className="star" style={{width:"27%"}} src={star} /></span>
                    <span><img className="star" style={{width:"27%"}} src={star} /></span>
                    <span><img className="star" style={{width:"27%"}} src={star} /></span>
                    <span className="rate" style={{color:"#ffffff",fontSize:"10px"}}> 5.0</span>
                    <span className="view">View Course</span>
                  </div>
                  <div className="corner"></div>
                </div>    

        )
    }
}
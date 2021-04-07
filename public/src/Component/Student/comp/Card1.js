import React, { Component } from 'react'
import "./Selling.css"
import image3 from "../../Assets/image/image3.png"
import star from "../../Assets/image/star.svg";
import star1 from "../../Assets/image/star1.svg";

export default class Card1 extends Component {
  render() {
    return (
      <div className="slidercard" style={{ height: "290px", width: "249px" }} >
        <img className="sliderimg" style={{ width: "249px", height: "151px" }} alt='' src={this.props.img} />
        <div className="corner"></div>
        <div className="card-head">
          <p className="name">{this.props.name}</p>
          <p className="instructor">By instructor Name</p>
          <div className="uk-flex uk-flex-between">
            <div className="uk-flex">
              <img className="star" src={star} />
              <img className="star" src={star} />
              <img className="star" src={star} />
              <img className="star" src={star} />
              <img className="star" src={star1} />
              <span className="rate" style={{ color: "#ffffff", fontSize: "12px" }}> 5.0</span>
            </div>
            <span className="view">View Course</span>

          </div>
        </div>
      </div>
    )
  }
}

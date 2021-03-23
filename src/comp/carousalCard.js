import React, { Component } from 'react'
import "./Selling.css"
import image3 from "../image/image3.png"
import star from "../image/star.svg";
import star1 from "../image/star1.svg";

export default class CarousalCard extends Component {
    render() {
        return (
            <div >
                <img className="crsalImg" alt='' src={this.props.img} />
                <div className="corner corner2"></div>

                <div>
                    <div class=" card-head2">
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
            </div>

            /* <div className="corner"></div>

           
            </div>
            //</div> {/* <img className="sliderimg" style={{ width: "249px", height: "151px" }} alt='' src={this.props.img} />
            // <div className="corner"></div>
            // <div className="card-head">
            //     <p className="name">{this.props.name}</p>
            //     <p className="instructor">By instructor Name</p>
            //     <img className="star"  src={star} />
            //     <span><img className="star"  src={star} /></span>
            //     <span><img className="star"  src={star} /></span>
            //     <span><img className="star"  src={star} /></span>
            //     <span><img className="star" style={{ width: "26%" }} src={star1} /></span>
            //     <span className="rate" style={{ color: "#ffffff", fontSize: "12px" }}> 5.0</span>
            //     <span className="view">View Course</span>
            // </div> */
        )
    }
}

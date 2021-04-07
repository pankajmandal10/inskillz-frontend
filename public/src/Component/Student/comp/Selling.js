import React, { Component } from 'react';
import "./Selling.css"
import Card1 from "./Card1"
import image6 from "../../Assets/image/image6.png"
import image2 from "../../Assets/image/image2.png"
import image3 from "../../Assets/image/image3.png"
import image4 from "../../Assets/image/image4.png"
import image5 from "../../Assets/image/image5.png"


import InfiniteCarousel from 'react-leaf-carousel';
 

export default class Selling extends Component{
    render() {
        return(
            <div className="sliderHome">
            <p className="card-title text-center my-5 py-4" style={{textAlign: "center", font: "normal normal bold 30px/35px Roboto", letterSpacing: "0px", color: "#143754",display:this.props.title}}> Best Selling Courses</p>
              <InfiniteCarousel
                breakpoints={[
                {
                  breakpoint: 500,
                  settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  },
                },
                {
                 breakpoint: 768,
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                 },
                },
               ]}
               dots={false}
               showSides={true}
               sidesOpacity={.5}
               sideSize={.1}
              //  slidesToScroll={4}
               slidesToShow={4}
               scrollOnDevice={true}
               >
                 
               <Card1 name={"Course 01"} img={image3}/>
               <Card1 name={"Course 02"} img={image2} />
               <Card1 name={"Course 03"} img={image5}/>
               <Card1 name={"Course 04"} img={image6}/>
               <Card1 name={"Course 05"} img={image4}/>
               
              </InfiniteCarousel>
           </div>
        )
    }
}
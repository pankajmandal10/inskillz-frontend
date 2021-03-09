import React, { Component } from 'react';
import "./Selling.css"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
import Card4 from "./Card4"
import Card5 from "./Card5"
import InfiniteCarousel from 'react-leaf-carousel';
 

export default class Selling extends Component{
    render() {
        return(
            <div className="sliderHome">
            <p className="card-title text-center my-5 py-5" style={{textAlign: "center", font: "normal normal bold 30px/35px Roboto", letterSpacing: "0px", color: "#143754"}}> Best Selling Courses</p>
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
               slidesToScroll={4}
               slidesToShow={4}
               scrollOnDevice={true}
               >
                 
               <Card1 />
               <Card1 />
               <Card1 />
               <Card1 />
               <Card1 />
               {/* <Card2 />
               <Card3 />
               <Card4 />
               <Card5 /> */}
              </InfiniteCarousel>
           </div>
        )
    }
}
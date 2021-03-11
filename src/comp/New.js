import React, { Component } from 'react';
import "./Selling.css"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
import Card4 from "./Card4"
import Card5 from "./Card5"
import InfiniteCarousel from 'react-leaf-carousel';
import image6 from "../image/image6.png"
import image2 from "../image/image2.png"
import image3 from "../image/image3.png"
import image4 from "../image/image4.png"
import image5 from "../image/image5.png"
 

export default class New extends Component{
    render() {
        return(
            <div>
            <p className="card-title text-center my-5 py-5" style={{textAlign: "center", font: "normal normal bold 30px/35px Roboto", letterSpacing: "0px", color: "#143754"}}> New Courses</p>
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
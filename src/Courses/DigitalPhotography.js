import React, { Component } from 'react';
import Card1 from "../comp/Card1"
import Card2 from "../comp/Card2"
import Card3 from "../comp/Card3"
import Card4 from "../comp/Card4"
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from "react-router-dom";
 

export default class DigitalPhotography extends Component{
    render() {
        return(
            <div>
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
               dots={true}
               showSides={true}
               sidesOpacity={.5}
               sideSize={.1}
               slidesToScroll={4}
               slidesToShow={3}
               scrollOnDevice={true}
               >
               <div>
               <Link to="/digital-marketing"><Card1 /></Link>
                <Card1 />
                <Card1 />
              </div>
                 
               
               <div>
                <Card2 />
                <Card2 />
                <Card2 />
               </div>
        

              <div>
                <Card3 />
                <Card3 />
                <Card3 />
              </div>
                
              
              <div>
                <Card4 />
                <Card4 />
                <Card4 />
              </div>

              <div>
                <Card1 />
                <Card1 />
                <Card1 />
              </div>

              </InfiniteCarousel>
              
           </div>
        )
    }
}

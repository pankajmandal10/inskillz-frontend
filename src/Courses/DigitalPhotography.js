import React, { Component } from 'react';
import Card1 from "../Component/Student/comp/Card1"
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from "react-router-dom";
import image6 from "../Component/Assets/image/image6.png"
import image2 from "../Component/Assets/image/image2.png"
import image3 from "../Component/Assets/image/image3.png"
import image4 from "../Component/Assets/image/image4.png"
import image5 from "../Component/Assets/image/image5.png"

export default class DigitalPhotography extends Component {
  render() {
    return (
      <div class="photoContain">
        
              <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
                <div>
                  <Link to="/digital-marketing">
                <Card1 name={"Course 01"} img={image3}/>
                </Link>
                </div>
                <div>
                <Card1 name={"Course 02"} img={image2} />
                </div>
                <div>
                <Card1 name={"Course 03"} img={image5}/>
                </div>
                <div>
                <Card1 name={"Course 04"} img={image6}/>
                </div>
                <div>
                <Card1 name={"Course 05"} img={image4}/>
                </div>
                <div>
                <Card1 name={"Course 01"} img={image3}/>
                </div>
                <div>
                <Card1 name={"Course 02"} img={image2} />
                </div>
                <div>
                <Card1 name={"Course 03"} img={image5}/>
                </div>
                <div>
                <Card1 name={"Course 04"} img={image6}/>
                </div>
              </div>
      </div>
    )
  }
}

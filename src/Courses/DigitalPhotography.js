import React, { Component } from 'react';
import Card1 from "../comp/Card1"
import Card2 from "../comp/Card2"
import Card3 from "../comp/Card3"
import Card4 from "../comp/Card4"
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from "react-router-dom";
import image6 from "../image/image6.png"
import image2 from "../image/image2.png"
import image3 from "../image/image3.png"
import image4 from "../image/image4.png"
import image5 from "../image/image5.png"

export default class DigitalPhotography extends Component {
  render() {
    return (
      <div class="photoContain">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="true">

          <ul class="uk-slideshow-items">
            <li>
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
            </li>
            <li>
              <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
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
            </li>
            <li>
              <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
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
            </li>
          </ul>

          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

      </div>
    )
  }
}

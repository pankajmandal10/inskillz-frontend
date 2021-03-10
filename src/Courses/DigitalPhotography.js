import React, { Component } from 'react';
import Card1 from "../comp/Card1"
import Card2 from "../comp/Card2"
import Card3 from "../comp/Card3"
import Card4 from "../comp/Card4"
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from "react-router-dom";


export default class DigitalPhotography extends Component {
  render() {
    return (
      <div class="photoContain">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="true">

          <ul class="uk-slideshow-items">
            <li>
              <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
                <div>
                <Card1></Card1>
                </div>
              </div>
            </li>
            <li>
              <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
                <Card1></Card1>
                <Card1></Card1>
                <Card1></Card1>

              </div>
            </li>
            <li>
              <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
                <Card1></Card1>
                <Card1></Card1>
                <Card1></Card1>

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

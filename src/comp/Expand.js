import React, { Component } from 'react';
import Group2 from "../image/Group2.svg"
import "./Expand.css"
import Ellipse4 from "../image/Ellipse4.svg"
import Group192 from "../image/Group192.svg"

export default class Expand extends Component {
    render() {
        return (
            <div className="py-5 my-5">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <img src={Ellipse4} className="ellipse-4" />
                  <img src={Group192} className="Group-192" />
                  <img
                      src={Group2}
                      className="group-2"
                      alt="home img"
                    />
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img px-5 py-5 my-5">
                    <p className="pro">Expand Your Knowledge to Be A Pro</p>
                    <p className="cont">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
                    </p>
                    <button className="buttons" type="submit">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}

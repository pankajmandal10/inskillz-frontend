import React, { Component } from 'react'
import "./Dream.css"
import Group3 from "../image/Group3.svg"
import Group5 from "../image/Group5.svg"
import Group6 from "../image/Group6.svg"
import Group7 from "../image/Group7.svg"
import Ellipse6 from "../image/Ellipse6.svg"
import Group193 from "../image/Group193.svg"

export default class Dream extends Component {
    render() {
        return (
            <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <p className="ensure">We Ensure Your Dream TO Be Successful</p>
                    <p className="text-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul >
                        <li>
                         <div class="card mb-2" style={{maxWidth: "340px",border:"0"}}>
                          <div class="row g-0">
                           <div class="col-md-2">
                             <img className="pic-icon" src={Group5} alt="..." />
                           </div>
                           <div class="col-md-10">
                            <div class="card-body">
                              <p className="interactive">Interactive Classess</p>
                              <p className="realtime">Realtime interactive classes for all the courses</p>
                            </div>
                           </div>
                          </div>
                         </div>
                        </li>
                        <li>
                        <div class="card mb-2" style={{maxWidth: "340px",border:"0"}}>
                          <div class="row g-0">
                           <div class="col-md-2 ">
                             <img className="pic-icon" src={Group6} alt="..." />
                           </div>
                           <div class="col-md-10">
                            <div class="card-body">
                              <p className="interactive">Expert Instructors</p>
                              <p className="realtime">Learn from industry Experts</p>
                            </div>
                           </div>
                          </div>
                         </div>
                        </li>
                        <li>
                        <div class="card mb-2" style={{maxWidth: "340px",border:"0"}}>
                          <div class="row g-0">
                           <div class="col-md-2 py-5">
                             <img className="pic-icon" src={Group7} alt="..." />
                           </div>
                           <div class="col-md-10">
                            <div class="card-body">
                              <p className="interactive">Learn</p>
                              <p className="realtime">Realtime interactive classes for all the courses</p>
                            </div>
                           </div>
                          </div>
                         </div>
                        </li>
                    </ul>
                   
                      <button className="learn" type="submit">Learn More</button>
              
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img py-5 my-5">
                    {/* <img src={Ellipse6} /> */}
                    <img src={Group193} className="Group-193" />
                    <img
                      src={Group3}
                      className="animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
        )
    }
}

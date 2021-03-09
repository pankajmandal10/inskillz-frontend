import React from "react";
import "./index.css";
import Group4 from "../image/Group4.svg"
import Path from "../image/Path.png"
// import { NavLink } from "react-router-dom";
import Ellipse3 from "../image/Ellipse3.svg"
import Group191 from "../image/Group191.svg"

export default class Home extends React.Component {
  render() {
    return (
      <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
             
              <div className="col-10 mx-auto">
                <div className="row">
                                
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="col-1" ><img className="flower" src={Path} /></div>
                    <p className="head">Courses That Are Designed For Your Success</p>
                    <p className="inst">Molding your inner skills with Online Courses from world-class Institutes and Tutors.</p>
                    <button className="join" >Join For Free</button>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img py-5 my-5">
                  <img src={Ellipse3} className="ellipse-3" />
                  <img src={Group191} className="group191" />
                    <img
                      src={Group4}
                      className="pic"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

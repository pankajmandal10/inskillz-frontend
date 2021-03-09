import React, { Component } from 'react'
import "./Learning.css"
import Path from "../image/Path.png"
import VideoPlayer from "./VideoPlayer"

export default class Learning extends Component {
  render() {
    return (
      <div style={{ backgroundImage: "linear-gradient(white, lightBlue)", paddingBottom: '10vh' }}>
        <section id="header" className="d-flex" >
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="col-1" ><img className="flowers" src={Path} /></div>
                    <div><VideoPlayer /></div>
                  </div>

                  <div className="col-lg-7 order-1 order-lg-2 header-img py-5 my-5">
                    <div >
                      <p className="start">Start Learning from Inskillz and<br></br>
                  Expand your career opportunities</p>
                      <p className="text-learn">
                        With more than 100+ Online Courses and Interactive Classes, your learning experience with us is packed with cutting edge technology.And which will help you to achieve your goals and ambitions.
                     </p>
                    </div>
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
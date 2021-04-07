import React, { Component } from 'react'
import "./Learning.css"
import Path from "../../Assets/image/Path.png"
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

                  <div className="col-lg-7 order-1 order-lg-2 header-img py-3 py-md-5 my-3 my-md-5 pb-0 mb-0 pb-md-5 mb-md-5">
                    <div >
                      <p className="start">Start learning from Inskillz and <br></br>
                             expand your CAREER OPPORTUNITIES
                      </p>
                      <p className="text-learn">
                      Taking advantage of cutting edge technology, we offer you an impeccable learning experience with more than 100+ Online Courses & Interactive Classes on Inskillz. 
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
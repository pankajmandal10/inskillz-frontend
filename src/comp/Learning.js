import React, { Component } from 'react'
import "./Learning.css"
import Path from "../image/Path.png"
import VideoPlayer from "./VideoPlayer"

export default class Learning extends Component {
    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(white, lightBlue)"}}>
        <section id="header" className="d-flex" >
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="col-1" ><img className="flowers" src={Path} /></div>
                  <p className="start">Start Learning<br></br>
                  By Choosing Your Option</p>
                     <p className="text-learn">
                     Lorem ipsum dolor sit amet, te consul numquam corpora sed, ut nominati disputationi eam, ex sea suavitate sadipscing.
                     </p>
                  </div>

                  <div  className="col-lg-6 order-1 order-lg-2 header-img py-5 my-5">
                    <VideoPlayer />
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

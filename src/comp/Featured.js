import React, { Component } from 'react'
import "./Featured.css"

export default class Featured extends Component {
    render() {
        return (
            <div className="card ">
              <div className="card-body py-3 my-5">
              <p className="featured">Featured Courses</p>
                 <div className="row row-cols-2 row-cols-md-4 g-4 pt-3 mt-5 uk-hidden">
                     <div className="col">
                        <p className="featured-1" >Illustration</p>
                     </div>
                     <div className="col">
                        <p className="featured-1">Graphic Design</p>
                     </div>
                     <div className="col">
                        <p className="featured-1">UI UX Design</p>
                     </div>
                     <div className="col">
                       <p className="featured-1">Motion Graphics</p>
                     </div>
                 </div>

                 <div className="row row-cols-2 row-cols-md-4 g-4 py-3 my-3">
                    <div className="col" >
                       <p className="featured-2">Course Name 01</p>
                       <p className="featuredSub" >0 Course</p>
                    </div>
                    <div className="col">
                        <p className="featured-2">Course Name 02</p>
                        <p className="featuredSub">0 Course</p>
                    </div>
                    <div className="col">
                        <p className="featured-2">Course Name 03</p>
                        <p className="featuredSub">0 Course</p>
                    </div>
                    <div className="col">
                        <p className="featured-2">Course Name 04</p>
                        <p className="featuredSub">0 Course</p>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-md-4 g-4 py-3 my-3">
                    <div className="col" >
                        <p className="featured-2">Course Name 05</p>
                        <p className="featuredSub">0 Course</p>
                    </div>
                    <div className="col">
                        <p className="featured-2">Course Name 06</p>
                        <p className="featuredSub">0 Course</p>
                    </div>
                    <div className="col">
                        <p className="featured-2">Course Name 07</p>
                        <p className="featuredSub">0 Course</p>
                    </div>
                        <div className="col">
                            <p className="featured-2">Course Name 08</p>
                            <p className="featuredSub">0 Course</p>
                        </div>
                    </div>

                    <div className="row row-cols-2 row-cols-md-4 g-4 py-3 my-3">
                        <div className="col" >
                            <p className="featured-2">Course Name 09</p>
                            <p className="featuredSub">0 Course</p>
                        </div>
                        <div className="col">
                            <p className="featured-2">Course Name 10</p>
                            <p className="featuredSub">0 Course</p>
                        </div>
                        <div className="col">
                            <p className="featured-2">Course Name 11</p>
                            <p className="featuredSub">0 Course</p>
                        </div>
                        <div className="col">
                            <p className="featured-2">Course Name 12</p>
                            <p className="featuredSub">0 Course</p>
                        </div>
                    </div>
                    
                    <div className="mt-3 px-5">
                      <button className="view-all-1" type="submit">View All</button>
                    </div>
                </div>
            </div>
        )
    }
}

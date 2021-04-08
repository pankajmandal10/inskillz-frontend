import React from 'react'
import "../../Courses/ProfileDetails/ProfileDetails.css"
import { Link } from "react-router-dom"

export default function ActiveCourses(props) {
    return (
        <div>
           <div className="card mb-3 shadaw" style={{border: "none"}}>
             <div className="row g-0">
               <div className="col-md-4">
                 <div className="fullHeight">
                   <img className="image-card" src="https://www.michaelpage.co.uk/sites/michaelpage.co.uk/files/How%20to%20create%20and%20maintain%20a%20good%20company%20culture-Blog%20article-MP.jpg"></img>
                   {/* <img className="image-card" src={props.img} alt="..." /> */}
                 </div>
               </div>
              <div className="col-md-8" >
              <div className="start-date">Start Date : {props.startDate}</div>
                <div className="card-body" style={{paddingLeft: "20px"}}>
                  <p className="card-title-name">{props.name}</p>
                  <p className="instructor-names">Instructor Name : {props.instructor}</p>
                  <p className="instructor-names">Courses Language {props.coursesLanguage}</p>
                  <p className="progressTxt">Chapter 02</p>
                  <p className="chapterTag">The Crux of Social media</p>
                  <div className='uk-flex offlineBtns'>
                  <span><Link to="/edit-course-Details"><button className="edit-courses-button" type="submit">Edit Courses</button></Link></span>
                  <span><Link to="/curx"><button className="viewDetail-button" type="submit">View Details</button></Link></span>
               
                  </div>
                  </div>
               </div>
              </div>
           </div>
        </div>
    )
}
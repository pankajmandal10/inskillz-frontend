import React from 'react'
import "./ProfileDetails.css"
import { Link } from "react-router-dom"

export default function ProgressCard(props) {
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
                    <p className="progressTxt">Progress</p>
                    <div className="uk-flex">
                    <div className="progress"  style={{height: "7px",width:"190px"}}>
                    <div className="progress-bar " role="progressbar" style={{width: "50%",fontSize: "8px",backgroundColor:"#35C635"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="progress-percentage">50%</p>
                  <p className="view-status">View Status</p>
                  </div>
                  <p className="progressTxt">Chapter 02</p>
                  <p className="chapterTag">The Crux of Social media</p>
                  <span><Link to="/curx"><button className="continue-button" type="submit">Continue</button></Link></span>
                </div>
               </div>
              </div>
           </div>
        </div>
    )
}

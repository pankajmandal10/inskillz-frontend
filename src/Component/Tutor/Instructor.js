import React from 'react'
import "../../Courses/ProfileDetails/ProfileDetails.css"
import TutorTabs from "./TutorTabs"
// import ProfileTabs from "../Courses/ProfileDetails/ProfileTabs";
import inst from "../../Courses/ProfileDetails/Img/instructor.png"
// import Selling from '../../comp/Selling'
// import Discuss from '../../comp/Discuss'
import Contact from '../../Courses/ProfileDetails/Contact'
// import Queries from '../Courses/ProfileDetails/queries'
// import Card1 from '../../comp/Card1'
// import image6 from "../../image/image6.png"
// import image2 from "../../image/image2.png"
// import image3 from "../../image/image3.png"
// import image4 from "../../image/image4.png"
// import image5 from "../../image/image5.png"
// import CarousalCard from '../../comp/carousalCard'
import { BrowserRouter, Switch, Route, Redirect,Link } from "react-router-dom";
import BestPlan from './BestPlan'

export default function Instructor() {
  return (
    <div class="row contactContainer">
      <div class="col-md-4">
        <div className="card-user">
        <p className="instructor-profile" style={{paddingTop: "22px"}} >INSTRUCTOR PROFILE</p>
          <img src={inst} className="uk-border-circle roundProfile" style={{marginTop: "0px"}} alt="..." />
          <div className="card-body">
            <p className="card-profile-name">Welcome Jyothi Prakash Kumar</p>
            <hr />

            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Courses Offered</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">15</div>
              </div>
            </div>

            <hr />

            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Student Enrolled</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">6746734</div>
              </div>
            </div>

            <hr />

            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Language</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">English</div>
              </div>
            </div>

            <hr />

            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Join Date</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">12-02-2021</div>
              </div>
            </div>

            <hr />
            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Courses Language</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">English</div>
              </div>
            </div>

          </div>
        </div>
        <Contact email="Johndeo@gmail.com" contact="8884115208" city="Bangalore,Karnataka" street="12th cross, BTM Layout" pin="Bangalore India,560078" />
      </div>
      <div class="col-md-8">
        <div className="profile-tabs tutorTabs">
          <TutorTabs />
        </div>
      </div>
      
      
      <BestPlan />
    </div>
  )
}

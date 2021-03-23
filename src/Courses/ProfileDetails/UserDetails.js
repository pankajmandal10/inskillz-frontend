import React from 'react'
import ProfileImg from "../Image/profile.png"
import "./ProfileDetails.css"
import ProfileTabs from "./ProfileTabs"
import Selling from '../../comp/Selling'
import Discuss from '../../comp/Discuss'
import Contact from './Contact'
import Queries from './queries'
import Card1 from '../../comp/Card1'
import image6 from "../../image/image6.png"
import image2 from "../../image/image2.png"
import image3 from "../../image/image3.png"
import image4 from "../../image/image4.png"
import image5 from "../../image/image5.png"
import CarousalCard from '../../comp/carousalCard'
import { BrowserRouter, Switch, Route, Redirect,Link } from "react-router-dom";

export default function UserDetails() {
  return (
    <div class="row contactContainer">
      <div class="col-md-4">
        <div className="card-user">
          <img src="http://careerconfidential.com/wp-content/uploads/2017/05/Businessman-Copy-Copy.jpg" className="uk-border-circle roundProfile" alt="..." />
          <div className="card-body">
            <p className="card-profile-name">Welcome John Doe</p>
            <hr />

            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Courses Enrolled</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">3</div>
              </div>
            </div>

            <hr />

            <div className="uk-flex">
              <div>
                <div className="profile-enrolled">Courses Completed</div>
              </div>
              <div className="uk-margin-left">
                <div className="profile-enrolled">1</div>
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
                <div className="profile-enrolled">Start Date</div>
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
        <div className="profile-tabs">
          <ProfileTabs />
        </div>
      </div>
      <p className="recommended">Courses Recommended</p>
      <div className="uk-child-width-1-4@s uk-visible@s uk-grid recommendedCards">
        <div>
          <Card1 name={"Course 01"} img={image3} />
          {/* <CarousalCard name={"Course 01"} img={image3}></CarousalCard> */}
        </div>
        <div>
          <Card1 name={"Course 02"} img={image2} />
        </div>
        <div>
          <Card1 name={"Course 03"} img={image5} />
        </div>
        <div>
          <Card1 name={"Course 04"} img={image6} />
        </div>
        {/* <Card1 name={"Course 05"} img={image4} /> */}
      </div>
      <div className="uk-hidden@s uk-padding ">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="true">
          <ul class="uk-slider-items recMobileSlider">
            <li>
              <Link to="/digital-marketing">
                <CarousalCard name={"Course 01"} img={image5}></CarousalCard>
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing">
                <CarousalCard name={"Course 01"} img={image4}></CarousalCard>
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing">
                <CarousalCard name={"Course 01"} img={image3}></CarousalCard>
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing">
                <CarousalCard name={"Course 01"} img={image2}></CarousalCard>
              </Link>
            </li>

          </ul>

          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

        </div>
      </div>
      <Queries></Queries>
    </div>
  )
}
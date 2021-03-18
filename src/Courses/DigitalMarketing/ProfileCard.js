import React from 'react'
import ProfileImg from "../Image/profile.png"
import "./index.css"
import pdf from "../Image/pdf.svg"

export default function ProfileCard() {
  return (
    <div>
      <div className="card-profile">
        <div className="card shadow" style={{ borderRadius: "10px", border: "none" }}>
          <img src={ProfileImg} className="card-img-top" alt="..." />
          <div className="card-body profileDetails" >
            <div class="container ">
              <div class="row">
                <div class="col">
                  <div className="profile-details">Instructor</div>
                </div>
                <div class="col">
                  <div className="profile-name">Jyothi Prakash Kumar</div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <div className="profile-details">Duration</div>
                </div>
                <div class="col">
                  <div className="profile-name"> 7 Weeks</div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <div className="profile-details">Lectures</div>
                </div>
                <div class="col">
                  <div className="profile-name">06</div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <div className="profile-details">Enrolled</div>
                </div>
                <div class="col">
                  <div className="profile-name">5,44,953</div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <div className="profile-details">Course Language</div>
                </div>
                <div class="col">
                  <div className="profile-name">English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body  chapters">

        <h5 className="chapterHead">Chapters</h5>
        <p className="chapterName">01 Introduction</p>
        <p className="chapterName">02 Tools</p>
        <p className="chapterName">03 Never To Miss Out</p>
        <p className="chapterName">04 Utilising Social Media</p>
        <p className="chapterName">05 Social Media for Business</p>
        <p className="chapterName">06 Chapter 06</p>
        <p className="chapterName">07 Final Things To Remember</p>


      </div>
      <button className="enrolBtn"> $300 Enroll Now </button><br></br>
      <button className="dwnldBtn" ><img className="uk-margin-small-right" src={pdf} />Download Brochure</button>

    </div>
  )
}
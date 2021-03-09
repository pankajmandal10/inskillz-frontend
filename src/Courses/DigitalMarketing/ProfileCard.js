import React from 'react'
import ProfileImg from "../Image/profile.png"
import "./index.css"

export default function ProfileCard() {
    return (
        <div className="card-profile">
          <div className="card shadow" style={{ borderRadius:"14px",border:"none"}}>
           <img src={ProfileImg} className="card-img-top" alt="..." />
           <div className="card-body" style={{background: "#FFFFFF 0% 0% no-repeat padding-box"}}>
           <div class="container">
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
    )
}
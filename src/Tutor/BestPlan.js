import React from 'react'
import "./Tutor.css"
import EditCourseDetails from "./EditCourseDetails"
import { Link } from 'react-router-dom'
import ScheduleLiveClass from './ScheduleLiveClass'

export default function BestPlan() {
    return (
        <div>
            <p className="best-plan">Pick the best plan for you</p>
            <p className="best-plan-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           <div className="tutor-plan">
            <div class="uk-grid">
             <div class="uk-width-1-3" >
               <div class="uk-child-width-1-1@s uk-grid-match" uk-grid style={{width:"21.41vw"}}>
                 <div>
                  <div class="uk-card uk-card-hover uk-card-body uk-text-center" style={{height: "545px"}}>
                     <div class="uk-card-header">
                       <div class="uk-grid-small uk-flex-middle" uk-grid>
                         <div class="uk-width-expand">
                          <h3 class="uk-card-title uk-margin-remove-bottom">
                             <p className="free">Free</p>
                          </h3>
                         </div>
                      </div>
                     </div>
                  <div class="uk-card-body">
                      <p className="monthly-fee">&#8377; 1000 <p className="per-month">per month</p></p>
                      <div className="text-area">
                        <i class="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                        <i class="fas fa-times"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i class="fas fa-times"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                        <i class="fas fa-times"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                        <i class="fas fa-times"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                  </div>
                  <button className="select-button">Select</button>
                  </div>
                 </div>
               </div>
             </div>


             <div class="uk-width-1-3" >
               <div class="uk-child-width-1-1@s uk-grid-match" uk-grid style={{width:"21.41vw"}}>
                 <div>
                  <div class="uk-card uk-card-hover uk-card-body uk-text-center" style={{height: "545px"}}>
                     <div class="uk-card-header">
                       <div class="uk-grid-small uk-flex-middle" uk-grid>
                         <div class="uk-width-expand">
                          <h3 class="uk-card-title uk-margin-remove-bottom">
                             <p className="standard">Standard</p>
                          </h3>
                         </div>
                      </div>
                     </div>
                  <div class="uk-card-body">
                      <p className="monthly-fee">&#8377; 1500 <p className="per-month">per month</p></p>
                      <div className="text-area">
                        <i class="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                      <i class="fas fa-check"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i class="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                        <i class="fas fa-times"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                        <i class="fas fa-times"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                  </div>
                  <button className="select-standard-button">Select</button>
                  </div>
                 </div>
               </div>
             </div>


             <div class="uk-width-1-3" >
               <div class="uk-child-width-1-1@s uk-grid-match" uk-grid style={{width:"21.41vw"}}>
                 <div>
                  <div class="uk-card uk-card-hover uk-card-body uk-text-center" style={{height: "545px"}}>
                     <div class="uk-card-header">
                       <div class="uk-grid-small uk-flex-middle" uk-grid>
                         <div class="uk-width-expand">
                          <h3 class="uk-card-title uk-margin-remove-bottom">
                             <p className="premium">Premium</p>
                          </h3>
                         </div>
                      </div>
                     </div>
                  <div class="uk-card-body">
                      <p className="monthly-fee">&#8377; 2000 <p className="per-month">per month</p></p>
                      <div className="text-area">
                        <i class="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                      <i class="fas fa-check"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i class="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                      <i class="fas fa-check"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i class="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                  </div>
                  <button className="select-premium-button">Select</button>
                  </div>
                 </div>
               </div>
             </div>
             </div>
           </div>
           <Link to="/edit-course-Details" >
             <button>Edit Course Details</button>
           </Link>
           <Link to="/add-new-course" >
             <button>Edit Course Details</button>
           </Link>
           <ScheduleLiveClass />
        </div>
    )
}

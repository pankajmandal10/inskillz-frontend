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
            <div className="uk-grid">
             <div className="uk-width-1-3" >
               <div className="uk-child-width-1-1@s uk-grid-match" uk-grid >
                 <div className="bestPlan-card">
                  <div className="uk-card uk-card-hover uk-card-body uk-text-center">
                     <div className="uk-card-header">
                       <div className="uk-grid-small uk-flex-middle" uk-grid>
                         <div className="uk-width-expand">
                          <h3 className="uk-card-title uk-margin-remove-bottom">
                             <p className="free">Free</p>
                          </h3>
                         </div>
                      </div>
                     </div>
                  <div className="uk-card-body">
                      <p className="monthly-fee">&#8377; 1000 <p className="per-month">per month</p></p>
                      <div className="text-area">
                        <i className="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                        <i className="fas fa-times"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i className="fas fa-times"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                        <i className="fas fa-times"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                        <i className="fas fa-times"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                  </div>
                  <button className="select-button">Select</button>
                  </div>
                 </div>
               </div>
             </div>


             <div className="uk-width-1-3" >
               <div className="uk-child-width-1-1@s uk-grid-match" uk-grid>
                 <div className="bestPlan-card">
                  <div className="uk-card uk-card-hover uk-card-body uk-text-center">
                     <div className="uk-card-header">
                       <div className="uk-grid-small uk-flex-middle" uk-grid>
                         <div className="uk-width-expand">
                          <h3 className="uk-card-title uk-margin-remove-bottom">
                             <p className="standard">Standard</p>
                          </h3>
                         </div>
                      </div>
                     </div>
                  <div className="uk-card-body">
                      <p className="monthly-fee">&#8377; 1500 <p className="per-month">per month</p></p>
                      <div className="text-area">
                        <i className="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                      <i className="fas fa-check"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i className="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                        <i className="fas fa-times"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                        <i className="fas fa-times"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                  </div>
                  <button className="select-standard-button">Select</button>
                  </div>
                 </div>
               </div>
             </div>


             <div className="uk-width-1-3" >
               <div className="uk-child-width-1-1@s uk-grid-match" uk-grid >
                 <div className="bestPlan-card">
                  <div className="uk-card uk-card-hover uk-card-body uk-text-center">
                     <div className="uk-card-header">
                       <div className="uk-grid-small uk-flex-middle" uk-grid>
                         <div className="uk-width-expand">
                          <h3 className="uk-card-title uk-margin-remove-bottom">
                             <p className="premium">Premium</p>
                          </h3>
                         </div>
                      </div>
                     </div>
                  <div className="uk-card-body">
                      <p className="monthly-fee">&#8377; 2000 <p className="per-month">per month</p></p>
                      <div className="text-area">
                        <i className="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                      <i className="fas fa-check"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i className="fas fa-check"></i>
                        <span className="sample-text">Sample Text Here</span> 
                      </div>
                      <div className="text-area1">
                      <i className="fas fa-check"></i>
                        <span className="sample-text1">Sample Text Here</span> 
                      </div>
                      <div className="text-area">
                      <i className="fas fa-check"></i>
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
        </div>
    )
}

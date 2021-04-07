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

        <div className="uk-child-width-1-3@s uk-grid" >

          <div className="bestPlan-card">
            <div className="uk-card uk-card-hover uk-card-body uk-text-center">
              <div className="uk-card-header free">
                  <p >Free</p>
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

          <div className="bestPlan-card">
            <div className="uk-card uk-card-hover uk-card-body uk-text-center">
            <div className="uk-card-header standard">
                  <p >Standard</p>
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

          <div className="bestPlan-card">
            <div className="uk-card uk-card-hover uk-card-body uk-text-center">
            <div className="uk-card-header premium">
                  <p >Premium</p>
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
  )
}

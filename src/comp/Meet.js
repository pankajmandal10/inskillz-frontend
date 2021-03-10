import React, { Component } from 'react'
import "./Meet.css";
import meet1 from "../image/meet1.png"
import meet2 from "../image/meet2.png"
import meet3 from "../image/meet3.png"
import meet4 from "../image/meet4.png"


export default class Meet extends Component {
    render() {
        return (
            <div style={{alignContent:'center'}}>
              <p className="meet-1">Meet Our Subject Matter Experts</p>
              <p className="meet">Our Instructors are influencers from every walk of life.<br></br>Browse through to find your Tutor.</p>
              
               {/* first row */}
               <div className="container">
                  <div className="uk-child-width-1-4 uk-grid" >
                     <div className="uk-text-center">
                         <div className="image_div" >
                             <img src="http://pngimg.com/uploads/question_mark/question_mark_PNG99.png" className="profile" alt="..."/>
                         </div>
                         <p className="title-2">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                     <div className="uk-text-center">
                         <div className="image_div">
                             <img src="http://pngimg.com/uploads/question_mark/question_mark_PNG99.png" className="profile" alt="..." />
                         </div>
                         <p className="title-2">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                     <div className="uk-text-center">
                         <div className="image_div">
                             <img src="http://pngimg.com/uploads/question_mark/question_mark_PNG99.png" className="profile" alt="..." />
                         </div>
                         <p className="title-2">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                     <div className="uk-text-center">
                         <div className="image_div">
                             <img src="http://pngimg.com/uploads/question_mark/question_mark_PNG99.png" className="profile" alt="..." />
                         </div> 
                         <p className="title-2">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                    
                  </div>
                  <div className="mt-3">
                      <button className="view-all-1"  type="submit">View All</button>
                    </div>
               </div>
          </div>
        )
    }
}

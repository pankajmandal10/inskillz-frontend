import React, { Component } from 'react'
import "./Meet.css";
import meet1 from "../../Assets/image/meet1.png"
import meet2 from "../../Assets/image/meet2.png"
import meet3 from "../../Assets/image/meet3.png"
import meet4 from "../../Assets/image/meet4.png"
import profile from '../../Assets/image/profile.png'

export default class Meet extends Component {
    render() {
        return (
            <div style={{alignContent:'center'}}>
              <p className="meet-1">Meet our subject matter EXPERTS </p>
              <p className="meet">Our Instructors are influencers from every walks of life. <br></br>
Browse through to find your Tutor. </p>
              
               {/* first row */}
               <div className="container">
                  <div className="uk-child-width-1-4@s uk-grid" >
                     <div className="uk-text-center">
                         <div className="image_div" >
                             <img src={profile} className="profile" alt="..."/>
                         </div>
                         <p className="instName">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                     <div className="uk-text-center">
                         <div className="image_div">
                             <img src={profile} className="profile" alt="..." />
                         </div>
                         <p className="instName">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                     <div className="uk-text-center">
                         <div className="image_div">
                             <img src={profile} className="profile" alt="..." />
                         </div>
                         <p className="instName">Name Of Institute/ Tutor</p>
                         <p className="position">Subject / Specialization</p>
                         <p className="text-1">Brief Profile : </p>
                     </div>
                     <div className="uk-text-center">
                         <div className="image_div">
                             <img src={profile} className="profile" alt="..." />
                         </div> 
                         <p className="instName">Name Of Institute/ Tutor</p>
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

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
                  <div className="row m-5" >
                     <div className="col-sm text-center">
                         <div className="image_div" >
                             <img src={meet1} className="profile" alt="..."/>
                         </div>
                         <p className="title-2">Selena</p>
                         <p className="position">Graphic Designer</p>
                         <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>
                     <div className="col-sm text-center">
                         <div className="image_div">
                             <img src={meet2} className="profile" alt="..." />
                         </div>
                         <p className="title-2">Eric Johnson</p>
                         <p className="position">Frontend Developer</p>
                         <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>
                     <div className="col-sm text-center">
                         <div className="image_div">
                             <img src={meet3} className="profile" alt="..." />
                         </div>
                         <p className="title-2">Kristina Smith</p>
                         <p className="position" >Fullstack Developer</p>
                         <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>
                     <div className="col-sm text-center">
                         <div className="image_div">
                             <img src={meet4} className="profile" alt="..." />
                         </div> 
                         <p className="title-2">Erich Carpenter</p>
                         <p className="position">Marketing Head</p>
                         <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>
                     <div className="mt-3">
                      <button className="view-all-1"  type="submit">View All</button>
                    </div>
                  </div>
               </div>
          </div>
        )
    }
}

import React from 'react'
import "./ProfileDetails.css"
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export default function Instructors(props) {
    return (
        <div className="card-instructors">
            <img src={props.pic} className="instructors-card-img" alt="..." />
             <div className="card-body" >
              <p className="card-title-instructors">{props.name}</p>
              <p className="card-text-instructors">Instructor : {props.instructor}</p>
              <button className="message-instructor-button" type="submit"><MailOutlineIcon style={{color:"red", fontSize:"20px"}} /> Message Instructor</button>
             </div>
        </div>
    )
}

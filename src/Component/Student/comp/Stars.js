import React from 'react'
import star from "../image/star.svg";
import star1 from "../image/star1.svg";

export default function Stars() {
    return (
        <div>
            <img className="star" style={{width:"27%"}} src={star} />
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"27%"}} src={star} /></span>
              <span><img className="star" style={{width:"26%"}} src={star1} /></span>
              <span className="rate" style={{color:"#ffffff", fontSize: "10px"}}> 5.0</span>
        </div>
    )
}

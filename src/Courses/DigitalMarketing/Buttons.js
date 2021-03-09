import React from 'react'


export default function Buttons(props) {
    return (
        <div>
          <table>
             <tr>
              <th><img className="button-image" src={props.Group} alt="icon" /></th> 
               <th rowSpan="3" className="image-text">{props.name}</th>
             </tr>    
          </table>
        </div>
    )
}

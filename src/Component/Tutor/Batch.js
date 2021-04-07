import React from 'react'

export default function Batch(props) {
    return (
        <div>
            <div class="uk-grid" uk-grid>
          <div className="batch">
            <div class="uk-card-body">{props.batchName}</div>
            
          </div>
          <div className="batch-name" >
            <label class="uk-card-body">Batch Name</label>
            <input className="batch-a" type="text" placeholder="Batch A" />
            <div style={{marginTop: "17px"}}>
            <label class="uk-card-body">Class Start Date</label>
            <input className="batch-a" type="text" placeholder="DD:MM:YYYY" />
            </div>
            <div style={{marginTop: "17px"}}>
            <label class="uk-card-body">Class Start Time</label>
            <input className="batch-a" type="text" placeholder="HH:MM" />
            </div>
          </div>
          <div className="batch-max-students" >
             <label class="uk-card-body">Max Students Allowed</label>
             <input className="max-students" type="text" placeholder="100" />
             <div style={{marginTop: "17px"}}>
               <label class="uk-card-body">Class End Date</label>
               <input className="max-students" type="text" placeholder="DD:MM:YYYY" />
             </div>
             <div style={{marginTop: "17px"}}>
               <label class="uk-card-body">Class End Time</label>
               <input className="max-students" type="text" placeholder="HH:MM" />
             </div>
          </div>
        </div>
        </div>
    )
}

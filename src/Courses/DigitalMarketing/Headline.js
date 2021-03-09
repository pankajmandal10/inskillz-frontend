import React from 'react'
import "./index.css"
// import Overview from "./Overview"
// import ReactDOM from "react-dom";

import Tabs from "./Tabs";
import Panel from "./Panel";

import { events } from "./Data";

const myInfluencers = [33, 81];

const userId = 4;

export default function Headline() {
    return (
        // <div className="headline">
        //   <div className="container">
        //     <div className="row">
        //       <div className="col-3 col-sm-2">
        //         <p className="overview">Overview</p>
        //         <hr className="line" style={{ align:"center"}}/>
        //       </div>
        //       <div className="col-3 col-sm-2">
        //         <span><p className="curriculum">Curriculum</p>
        //         <hr className="line-1" style={{ align:"center"}}/>
        //         </span>
        //       </div>
        //       <div className="col-3 col-sm-2">
        //         <span><p className="instructors">Instructor</p>
        //         <hr className="line-1" style={{ align:"center"}}/>
        //         </span>
        //       </div>
        //       <div className="col-3 col-sm-2">
        //         <span><p className="review">Review</p>
        //         <hr className="line-1" style={{ align:"center"}}/>
        //         </span>
        //       </div>
        //     </div>
        //   </div>  
        //   <div className="overview-text">
        //   <p className="overview-text-1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //   <p className="overview-text-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        //   </div>
        // </div>
        <div className="tabs">
        <Tabs>
        <Panel title="Overview">
        <div className="overview-text">
        {events
          .filter(event => event.host_id !== userId)
          .map(event => {
            return <div key={event.id}>{event.title}</div>;
          })}
        </div>
        
      </Panel>
      
      <Panel title="Curriculum" >
        {events
          .filter(event => myInfluencers.includes(event.host_id))
          .map(event => {
            return <div key={event.id}>{event.title}</div>;
          })}
      </Panel>
      <Panel title="Instructor">
      <div className="overview-text">
      {events.map(event => {
          return <div key={event.id}>{event.title}</div>;
        })}
        </div>
      </Panel>
        
      <Panel title="Review">
      <div className="overview-text">
        {events.map(event => {
          return <div key={event.id}>{event.title}</div>;
        })}
        </div>
      </Panel>
    </Tabs>
    </div>
    )
}

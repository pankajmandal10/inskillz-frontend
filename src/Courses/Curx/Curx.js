import React from 'react'
import CurxHeader from "./CurxHeader"
import ReactPlayer from 'react-player'
import CourseContent from './CourseContent'
import CurxTabs from './CurxTabs'

export default function Curx() {
    return (
        <div>
          <CurxHeader />
            <div class="uk-grid">
               <div class="uk-width-2-3@s xtraWidth">
                 <div className="curx-video-player">
                    <ReactPlayer
                     className='react-player'
                     url='https://www.youtube.com/watch?v=TsEyQx2mpJg'
                     width='100%'
                     height="438px"
                    />
                  </div>
                  <div className="curxTabs">
                   <CurxTabs />
                  </div>

                </div>
                <div class="uk-width-1-3@s nonPdLeft">
                  <CourseContent />
                </div>
            </div>
        </div>
    )
}

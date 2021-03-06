import React from 'react'
import "./VideoPlayer"
import ReactPlayer from 'react-player'

// Render a YouTube video player
export default class VideoPlayer extends React.Component {
    render () {
      return (
        <div stylle={{maxHeight:'300px'}} className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=TsEyQx2mpJg'
            width='100%'
            height="250px"
          />
        </div>
      )
    }
  }
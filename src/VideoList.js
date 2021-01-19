import React from 'react'
import VideoItem from './VideoItem'

const VideoList =(props) => {
        return <div>
           {props.videos.map(video => <VideoItem video={video}/>)}
        </div>
}
export default VideoList
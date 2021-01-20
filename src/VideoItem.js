import './VideoItem.css'
import React from 'react'


const VideoItem = ({video,selectedVideo})=>{
    return <div className="video-item item" onClick={()=>selectedVideo(video)}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
            <div className="header">{video.snippet.title}</div>
            </div>
           
        </div>
}
export default VideoItem
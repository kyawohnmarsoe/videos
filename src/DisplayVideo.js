import React from 'react'

const DisplayVideo =({video})=>{
    if (!video){
        return<div>Loading..</div>
    }

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
  
  console.log(video)
    return(
        <div> 
            <div className="ui embed">
            <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>
       
    )
}

export default DisplayVideo
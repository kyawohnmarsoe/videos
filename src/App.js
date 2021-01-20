import React from 'react'
import SearchBar from './SearchBar'
import YouTube from './YouTube'
import VideoList from './VideoList'
import DisplayVideo from './DisplayVideo'

const KEY = 'AIzaSyBd2-sDwdtymM9uWqQTYja1IrqV3UVJgSg'

class App extends React.Component{
    state = {videos:[], video:null}
    componentDidMount(){
        this.searchSubmit('cat')
    }
    searchSubmit = async term => {
        const response =  await YouTube.get('/search',{
               params:{
                part: "snippet",
                maxResults: 5,
                q: term,
                type: 'video',
                key: KEY
               }
           })
        this.setState({
            videos: response.data.items,
            video: response.data.items[0]
        })
        // console.log(this.state.video.id.videoId)
       }
    
    selectedVideo = (video) => {
        this.setState({
            video: video
        })
    }



    render(){
        return <div className="ui container">
                    <SearchBar searchSubmit={this.searchSubmit}/>
                    <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                    <DisplayVideo video={this.state.video}/>
                    </div>
                    <div className="five wide column">
                    <VideoList videos={this.state.videos} selectedVideo={this.selectedVideo}/>
                    </div>
                    </div>
            </div>
          
            
        </div>
    }
}

export default App
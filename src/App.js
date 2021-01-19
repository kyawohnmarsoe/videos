import React from 'react'
import SearchBar from './SearchBar'
import YouTube from './YouTube'
import VideoList from './VideoList'

const KEY = 'AIzaSyBd2-sDwdtymM9uWqQTYja1IrqV3UVJgSg'

class App extends React.Component{
    state = {videos:[]}
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
            videos: response.data.items
        })

       }


    render(){
        return <div className="ui container">App
            <SearchBar searchSubmit={this.searchSubmit}/>
            {this.state.videos.length}
            <VideoList videos={this.state.videos}/>
        </div>
    }
}

export default App
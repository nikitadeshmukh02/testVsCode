import React, { Component } from 'react'
import ReactDom from 'react-dom'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_details'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyDSo2LXcxM6tquJGp2ypPM5UAbIX8ZylEA'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { video: [], selectedVideo: null };
    this.videoSearch('reactjs') 

    }
    videoSearch(terms) {
        YTSearch({ key: API_KEY, term: terms }, (video) => {

            this.setState({ video, selectedVideo: video[0] });
        });
    }
    render() {
        //debugger
        return (
            <div>
                <SearchBar onSearchTermChange={term=>this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList video={this.state.video} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
            </div>
        )
    }

}
ReactDom.render(<App />, document.querySelector('.container'))
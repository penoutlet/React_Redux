// create a new component. This component should poduce some HTML.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
const API_KEY = 'AIzaSyDG93SFfolfuWsDBK_paaJvjNqG3SMhu_8';


class App extends Component {
  constructor(props) {
    super(props)
      this.state = { videos: [],
        selectedVideo: null
      }


    // console.log({this.state.videos})


    YTSearch({key: API_KEY, term: 'Green Day'}, (videos) => {
      console.log(videos)
        this.setState({
          video:videos,
          selectedVideo: videos[0]
        });
    });
  }

  render() {

    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'))

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';
import './index.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Make your Playlist !",
      spotify_title: "Spotilist",
      deezer_title: "Deezeeliste",
      soundcloud_title: "Soundclist"
    }
  };

  updatePlaylistName(name) {
    this.setState({
      spotify_title: name
    });
  }

  render(){
    return(
        <div className="main-div">
          <h1>{this.state.title}</h1>
          <ul>
            <li>Spotify: {this.state.spotify_title}</li>
            <li>Deezer: {this.state.deezer_title}</li>
            <li>Soundcloud: {this.state.soundcloud_title}</li>
          </ul>
          <Editor
            updatePlaylistName={this.updatePlaylistName.bind(this)}
          />
        </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

import React from 'react' ;

export default class Editor extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playlistName: "",
            selectedOption: ""
        }
    }

    handleNameChanged(event) {
        this.setState({
            playlistName: event.target.value
        });
    }

    handleButtonClicked(){
        this.props.updatePlaylistName(this.state.playlistName);
    }

    render() {
        return (
            <div>
                <div id="witch-service">
                    <input type="radio" value="Spotify" name="service" />Spotify
                    <input type="radio" value="Deezer" name="service" />Deezer
                    <input type="radio" value="Soundcloud" name="service" />Soundcloud
                </div>
                <input type="text" value={this.state.playlistName} onChange={this.handleNameChanged.bind(this)} />
                <button onClick={this.handleButtonClicked.bind(this)}>
                    Save Changes
                </button>
            </div>
        );
    }
}
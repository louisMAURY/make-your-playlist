import React from 'react';
import ReactDOM from 'react-dom';
const https = require('https')
import './App.css';


function getJoke(){
  https.get('https://v2.jokeapi.dev/joke/Any?type=twopart', (response) =>
  {
      let raw_data = "";

      response.on('data', (chunk) => {
          raw_data += chunk;
      });

      response.on('end', () => {
          return `${JSON.parse(raw_data).setup}\n${JSON.parse(raw_data).delivery}`;
      });
  }).on('error', (error) => {
      console.log('Error: ' + error.message);
  });
}

function Joke (props) {
  return (
    <div className="joke">
      <p>
        {props.value}
      </p>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "BlagueAPI",
      joke: "",
    }
  };

  handleClick(){
    const the_joke = getJoke()
    this.setState({
      joke: the_joke,
    })
  }

  renderJoke(){
    return(
      <button
      onClick={() => this.handleClick()}
      />,
      <Joke
      value={}
      />
    );
  }

  render(){
    const title = this.state.title
    return(
        <div className="main-div">
          <h1>{title}</h1>
          {/* <button
          value="Make a joke"
          onClick={joke(props.onClick)}>
            {props.value}
          </button> */}
          <div className="joke">
            {this.renderJoke()}
          </div>
        </div>
    );
  }
}

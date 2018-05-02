import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff',
  display: 'inline-block'
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%'}} className='aggregate'>
        <h2>Number text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img/>
        <input placeholder='Enter your playlist...'/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '20%'}}>
        <img/>
        <h1>Playlist</h1>
        <ul>
          <li>Track 1</li>
          <li>Track 2</li>
          <li>Track 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 style={{color: '#fff'}} className="App-title">Future Music</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff',
  display: 'inline-block'
}

let fakeServerData = {
  user: {
    name: 'Andrii',
    playlists: [
      {
        name: 'My favourites',
        songs: [
          {name: 'Automaton', duration: 3500},
          {name: 'Shake It On', duration: 2400},
          {name: 'Dr. Buzz', duration: 3700}
        ]
      },

      {
        name: 'Funk Music',
        songs: [
          {name: 'Stayin\' Alive', duration: 4500},
          {name: 'Give Me The Night', duration: 3500},
          {name: 'When The Beates Goes On', duration: 5500}
        ]
      },

      {
        name: 'Electronic',
        songs: [
          {name: 'VATRA', duration: 3700},
          {name: 'Mary', duration: 3300},
          {name:'Dancing', duration: 4500}
        ]
      }
    ]
  }
}

class PlaylistsCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%'}} className='aggregate'>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0)
    return (
      <div style={{...defaultStyle, width: '40%'}} className='aggregate'>
        <h2>{Math.round(totalDuration/60)} hours</h2>
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
  constructor() {
    super();
    this.state = {serverData: {}};
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({serverData: fakeServerData});
      }, 1000)
  }

  render() {
    return (
      <div className="App">
        {
          this.state.serverData.user ?
          <div>
            <h1 style={{color: '#fff'}} className="App-title">
              {this.state.serverData.user.name}'s playlist
            </h1>
            <PlaylistsCounter playlists = {this.state.serverData.user.playlists}/>
            <HoursCounter playlists = {this.state.serverData.user.playlists}/>
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div> : <h1 style = {{color: '#fff'}}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;

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
        <input placeholder='Enter your playlist...' onKeyUp = {event => this.props.onTextChange(event.target.value)}/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist;
    return (
      <div style={{...defaultStyle, width: '25%'}}>
        <img/>
        <h1>{playlist.name}</h1>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filerString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
    .filter(playlist => playlist.name.toLowerCase().includes(this.state.filterString)) : [];

    return (
      <div className="App">
        {
          this.state.serverData.user ?
          <div>
            <h1 style={{color: '#fff'}} className="App-title">
              {this.state.serverData.user.name}'s playlist
            </h1>
            <PlaylistsCounter playlists = {playlistToRender}/>
            <HoursCounter playlists = {playlistToRender}/>
            <Filter onTextChange = {text => this.setState({filterString: text})}/>
            {playlistToRender.map(playlist => 
              <Playlist playlist = {playlist}/>)}
          </div> : <h1 style = {{color: '#fff'}}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
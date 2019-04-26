import React, { Component } from 'react';
import fetch from 'node-fetch';
import PopularList from './PopularList.jsx';
import '../style.scss';
import AudioPlayer from './AudioPlayer.jsx';

class TopTracks extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      currentTrack: {},
    };
    this.setCurrentTrack = this.setCurrentTrack.bind(this);
  }

  componentDidMount() {
    this.getTopTracks();
    const context = this;
    window.addEventListener('hashchange', () => {
      context.forceUpdate();
    });
  }

  getTopTracks() {
    fetch('/tracks/top')
      .then(results => results.json())
      .then(tracks => {
        this.setState({ tracks });
      })
      .catch(console.log);
  }

  setCurrentTrack(track) {
    this.setState({
      currentTrack: {
        name: track.name,
        artist: track.artist,
        image: track.image,
        length: track.length,
      },
    });
  }

  render() {
    const { tracks, currentTrack } = this.state;
    const { setCurrentTrack } = this;
    if (!tracks) return null;

    if (window.location.hash !== '#related') {
      return (
        <div id="main" data-testid="popular-main">
          <div id="left" />
          <div id="content">
            <h1 id="header">Popular</h1>
            <PopularList
              data-testid="popular-list"
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
            />
          </div>
          <AudioPlayer currentTrack={currentTrack} />
        </div>
      );
    }
    return (
      <div id="main" data-testid="popular-main">
        <AudioPlayer currentTrack={currentTrack} />
      </div>
    );
  }
}

export default TopTracks;

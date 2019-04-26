import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };

    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentTrack } = this.props;

    if (currentTrack !== prevProps.currentTrack) {
      this.togglePlay(!!currentTrack.image);
    }
  }

  togglePlay(_e, val) {
    this.setState(prevState => ({
      play: typeof val !== 'undefined' ? val : !prevState.play,
    }));
  }

  render() {
    const {
      currentTrack: { name, artist, image, length },
    } = this.props;

    const { play } = this.state;

    return (
      <Player data-testid="audio-player">
        <LeftFlex>
          <div data-testid="left-flex-image">
            {image && (
              <img src={image} alt="albumImage" height="50" width="50" />
            )}
          </div>
          <LeftInnerFlex>
            <div data-testid="left-flex-track" className="aTrackName">
              {name}
            </div>
            <div className="aArtistName">{artist && artist.name}</div>
          </LeftInnerFlex>
          <Icon>{image && <i className="fas fa-plus" />}</Icon>
        </LeftFlex>
        <CenterFlex>
          <CenterTopFlex>
            <Icon>
              <i className="fas fa-random" />
            </Icon>
            <Icon>
              <i className="fas fa-step-backward" />
            </Icon>
            <PlayIcon>
              <i
                className={play ? 'far fa-pause-circle' : 'far fa-play-circle'}
                onClick={this.togglePlay}
              />
            </PlayIcon>
            <Icon>
              <i className="fas fa-step-forward" />
            </Icon>
            <Icon>
              <i className="fas fa-sync-alt" />
            </Icon>
          </CenterTopFlex>
          <CenterBottomFlex>
            <div className="songTime">0:00</div>
            <i className="fas fa-circle" />
            <div>
              <hr className="progress" />
            </div>
            <div className="songTime">{length || '0:00'}</div>
          </CenterBottomFlex>
        </CenterFlex>
        <RightFlex>
          <Icon>
            <i className="fas fa-sliders-h" />
          </Icon>
          <Icon>
            <i className="fas fa-mobile-alt" />
          </Icon>
          <Icon>
            <i className="fas fa-volume-up" />
          </Icon>
          <div>
            <hr className="volume" />
          </div>
        </RightFlex>
      </Player>
    );
  }
}

AudioPlayer.propTypes = {
  currentTrack: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    image: PropTypes.string,
    length: PropTypes.string,
  }).isRequired,
};

export default AudioPlayer;

const Player = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  color: #b3b3b3;
  background-color: #272727;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  z-index: 2;
`;

const LeftFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: 20px;
  div div:hover {
    color: white;
    text-decoration: underline;
  }
`;

const CenterFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 500px;
    right: 28%;
    left 32%;
  `;

const RightFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

const LeftInnerFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 5px;
`;

const CenterTopFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 224px;
  height: 32px;
`;

const CenterBottomFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  height: 32px;
  width: 32px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
  & i:hover {
    color: white;
    transition: all 0.3s ease;
  }
`;

const PlayIcon = styled.div`
  height: 32px;
  width: 32px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
  & i:hover {
    color: white;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

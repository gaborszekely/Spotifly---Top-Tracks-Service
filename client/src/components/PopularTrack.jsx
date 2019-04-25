import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ellipsis from './Ellipsis.jsx';
import ContextMenu from './ContextMenu.jsx';

class PopularTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      contextPosition: { top: 0, left: 0 },
    };
    this.showContext = this.showContext.bind(this);
    this.hideContext = this.hideContext.bind(this);
  }

  showContext(event) {
    event.preventDefault();
    const newPosition = { left: event.clientX, top: event.clientY };
    this.setState({ display: true, contextPosition: newPosition }, () => {
      document.addEventListener('click', this.hideContext);
    });
  }

  hideContext() {
    this.setState({ display: false }, () => {
      document.removeEventListener('click', this.hideContext);
    });
  }

  render() {
    const { track, setCurrentTrack } = this.props;
    const { display, contextPosition } = this.state;
    if (!track) return null;

    return (
      <div
        className="flex1"
        data-testid="track"
        onDoubleClick={() => setCurrentTrack(track)}
        onContextMenu={this.showContext}
      >
        {display && (
          <ContextMenu data-testid="context-menu" position={contextPosition} />
        )}
        <div className="flex2">
          <div data-testid="track-icon" className="icon">
            <i className="fas fa-music" />
            <i className="fas fa-play" />
          </div>
          <div className="image">
            <img
              data-testid="track-image"
              src={track.image}
              alt={track.name}
              height="50"
              width="50"
            />
          </div>
          <div data-testid="track-name" className="trackName">
            {track.name}
          </div>
        </div>
        <div className="flex3">
          <Ellipsis />
          <div data-testid="track-length" className="trackLength">
            {track.length}
          </div>
        </div>
      </div>
    );
  }
}

PopularTrack.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    playcount: PropTypes.number.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};

export default PopularTrack;

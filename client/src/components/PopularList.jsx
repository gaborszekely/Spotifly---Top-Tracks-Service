import React from 'react';
import PropTypes from 'prop-types';
import PopularTrack from './PopularTrack.jsx';

const PopularList = ({ tracks, setCurrentTrack }) => {
  if (!tracks) return <h1 data-testid="loading">Loading...</h1>;

  return (
    <div data-testid="popular-list">
      {tracks.map(track => (
        <PopularTrack
          key={track.id}
          track={track}
          setCurrentTrack={setCurrentTrack}
        />
      ))}
    </div>
  );
};

PopularList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
      playcount: PropTypes.number.isRequired,
      length: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};

export default PopularList;

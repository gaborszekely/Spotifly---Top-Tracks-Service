import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ContextMenu({ position }) {
  const List = styled.div`
    position: fixed;
    z-index: 2;
    top: ${position.top - 126}px;
    left: ${position.left}px;
    list-style-type: none;
    padding: 0px 0px;
  `;

  return (
    <List data-testid="list" className="contextMenu">
      <div>Start Radio</div>
      <div>Save to Your library</div>
      <div>Add to Queue</div>
      <div>Add to Playlist</div>
      <div>Copy Song link</div>
    </List>
  );
}

ContextMenu.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
};

export default ContextMenu;

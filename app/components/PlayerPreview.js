import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = props => {
  const { avatar, username, id, onReset } = props;
  return (
    <div>
      <div className="column">
        <img className="avatar" src={avatar} alt={`avatar for ${username}`} />
        <h2 className="username">@{username}</h2>
      </div>
      {props.children}
      {/*<button className="reset" onClick={() => onReset(id)}>
        Reset
      </button>*/}
    </div>
  );
};

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default PlayerPreview;
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Song = ({ lyric }) => {
  if (lyric.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra Canción</h2>
      <p className="letra">{lyric}</p>
    </Fragment>
  );
};
Song.propTypes = {
  lyric: PropTypes.string.isRequired
};

export default Song;

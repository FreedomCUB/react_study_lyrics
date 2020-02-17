import React from "react";
import PropTypes from "prop-types";

const Inf = ({ inf }) => {
  if (Object.keys(inf).length === 0) return null;

  const {
    strArtistThumb,
    strArtist,
    strGenre,
    strBiographyES,
    strBiographyEN,
    strLastFMChart,
    strFacebook,
    strTwitter
  } = inf;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <h1 className="card-text text-center mb-4">{strArtist}</h1>
        <img src={strArtistThumb} alt="Artist Thumb" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografía:</h2>
        <p className="card-text">
          {strBiographyES === null ? strBiographyEN : strBiographyES}
        </p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href={strLastFMChart} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};
Inf.propTypes = {
  inf: PropTypes.object.isRequired
};
export default Inf;

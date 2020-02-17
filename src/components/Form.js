import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ setSearchlyric }) => {
  const [search, setSearch] = useState({
    artist: "",
    song: ""
  });
  const [error, setError] = useState(false);

  const { artist, song } = search;

  const updateState = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setSearch({
      artist: "",
      song: ""
    });
  };
  // Consulting api lyrics OVH
  const consultApi = e => {
    e.preventDefault();
    if (artist.trim() === "" || song.trim === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearchlyric(search);
    resetForm();
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Escriba un Artista y canción
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={consultApi}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscar Letras de Canciones
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      value={artist}
                      placeholder="Nombre artista"
                      onChange={updateState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label>Canción</label>
                  <input
                    type="text"
                    className="form-control"
                    name="song"
                    value={song}
                    placeholder="Nombre canción"
                    onChange={updateState}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right mt-2 "
              >
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setSearchlyric: PropTypes.func.isRequired
};

export default Form;

import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import Inf from "./components/Inf";
import Axios from "axios";

function App() {
  const [searchlyric, setSearchlyric] = useState({});
  const [lyric, setLyric] = useState("");
  const [inf, setInf] = useState({});

  useEffect(() => {
    if (Object.keys(searchlyric).length === 0) return;
    const consultLyricAPI = async () => {
      const { artist, song } = searchlyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [lyric, inf] = await Promise.all([Axios.get(url), Axios.get(url2)]);
      setLyric(lyric.data.lyrics);
      setInf(inf.data.artists[0]);
    };
    consultLyricAPI();
  }, [searchlyric]);

  return (
    <Fragment>
      <Form setSearchlyric={setSearchlyric} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Inf inf={inf} />
          </div>
          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

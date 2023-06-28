import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import axios from "axios";

const MovieInfoComponent = (props) => {
  const API_KEY = "729a6477";
  const { selectedMovie } = props;

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?i=" + selectedMovie + "&apikey=" + API_KEY)
      .then((response) => 
        setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="Movie-Info">
      {movieInfo && (
        <>
          <img className="Movie-Info-img" src={movieInfo.Poster} alt="post" />

          <div className="Movie-Info-Column">
            <div className="Movie-Info-Name">Movie Name: {movieInfo.Title}</div>

            <div className="Movie-detail">
            <p>
              Impb Rating: <span>{movieInfo.imdbRating}</span>
            </p>
            <p>
              Year: <span>{movieInfo.Year}</span>
            </p>
            <p>
              Language: <span>{movieInfo.Language}</span>
            </p>
            <p>
              Rated: <span>{movieInfo.Rated}</span>
            </p>
            <p>
              Released: <span>{movieInfo.Released}</span>
            </p>
            <p>
              Runtime: <span>{movieInfo.Runtime}</span>
            </p>
            <p>
              Director: <span>{movieInfo.Director}</span>
            </p>
            <p>
              Actors: <span>{movieInfo.Actors}</span>
            </p>
            <p>
              Award: <span>{movieInfo.Awards}</span>
            </p>
            </div>
            <div className="close" onClick={()=>props.onMovieSelect()}>X</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieInfoComponent;
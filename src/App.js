import {useEffect} from "react";

import './App.css';
// 7280871

const API_URL = 'http://www.omdbapi.com?apikey=7280871'

const movie1 = {
    "Title": "Don't Worry, We'll Think of a Title",
    "Year": "1966",
    "imdbID": "tt0060332",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzliMjU1MGQtN2VjZC00YmIzLWE4Y2UtOGZkNmM1OWY0ODkwXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
}


const App = ( ) => {
  
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
     searchMovie('superman');
    }, []);

  return (
    <div className="app">
      <h1>movie land</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="superman"
          onChange={() => {}}
        />
        <button onClick={() => {}}>
          search
        </button>
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster} alt={movie1.Title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
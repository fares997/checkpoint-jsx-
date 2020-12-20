import './App.css';
import  React, { useState } from 'react';
import {MovieData} from "./components/MovieData";
import MoviesList from "./components/MoviesList/MoviesList";
import AddMovie from "./components/AddMovies/AddMovies"
import SearchMovie from "./SearchMovie"
function App() {
  const [movieList, setMovieList] = useState(MovieData); 
  const [ratingSearch, setRatingSearch] = useState(1);
  const [nameSearch, setNameSearch] = useState('');
  
 
  const addNewMovie = (e, NewMovie) => {
    e.preventDefault();
    setMovieList([...movieList, NewMovie]);
  }
 return (
    <div className="App">
     <SearchMovie
     ratingSearch={ratingSearch}
       setRatingSearch={setRatingSearch}
       setNameSearch={setNameSearch}
     />
     <MoviesList
       movieList={movieList}
       nameSearch={nameSearch}
       ratingSearch={ratingSearch}
       />
     <div style={{ display: 'felx', JustifyContent: 'center' }}>
       <AddMovie addNewMovie={addNewMovie }/>
     </div>
    </div>
  );
}
export default App;
import React from 'react';
import '../App.css'

interface Movie{
  rank:number;
  title:string;
  image: string;
  genre: string[];
  rating: string;
  id: string;
  year:number;
}

interface Props {
  movies: Movie[]
}

const Movies = ({movies}:Props) => {
  return (
    <>
      
      <div className="container">
        <div className="row g-5">
          {movies.map((movie) => (
            <div className='col-md-4' key={movie.id}>
              <div className="card h-400">
                <img className='img-fluid' src={movie.image} />
                <div className="card-body">
                  <h5 className='card-title text-truncate'>{movie.title}</h5>
                  <p className='card-text'>Rank: {movie.rank}</p>
                  <p>Genre: {movie.genre.join(', ')}</p>
                  <p className="card-text">Rating: {movie.rating}</p>
                  <p className="card-text">Year: {movie.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Movies
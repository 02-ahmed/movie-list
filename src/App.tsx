import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/Header';
import axios from 'axios'
import Movies from './components/Movies';

interface Movie {
  rank:number;
  title:string;
  image: string;
  genre: string[];
  rating: string;
  id: string;
  year:number;

}

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get<Movie[]>("https://imdb-top-100-movies.p.rapidapi.com/", {
      headers: {
        'x-rapidapi-key':'',
        'x-rapidapi-host':'imdb-top-100-movies.p.rapidapi.com'
      }
    })
    .then((result) => setMovies(result.data))
    .catch((error) => setError(error.message))
  }, [])

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      <div className='mb-3'>
        <Header />
      </div>
      <Movies movies={movies}/>
    </>
  )
}

export default App
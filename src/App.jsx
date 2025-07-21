import { useEffect, useState } from 'react'



function App() {
  
  const movies_list = [
{ title: 'Inception', genre: 'Fantascienza' },
{ title: 'Il Padrino', genre: 'Thriller' },
{ title: 'Titanic', genre: 'Romantico' },
{ title: 'Batman', genre: 'Azione' },
{ title: 'Interstellar', genre: 'Fantascienza' },
{ title: 'Pulp Fiction', genre: 'Thriller' },
]

const [movies, setMoviesList] = useState(movies_list)
const [search, setSearch] = useState ('')
const movie_title = movies_list.map( movies_list => movies_list.title)
const movie_genre = movies_list.map( movies_list => movies_list.genre)
console.log(movie_title, movie_genre);


useEffect(() => {
  console.log("Searched for a film:" + search);
  
}, [search]) 


  return (

  <>
    <div className="container">
      <h1>Search a Movie</h1>
      <div className="card p-3">
        <div className="d-flex align-items-center m-2">

        <input className="form-control m-3 p-3" type="text" placeholder="Search movie..." value={search}onChange={(e) => setSearch(e.target.value)}></input>
        <button className="btn btn-primary">Search</button>

        </div>
      </div>
      <ul className='list-group m-3'>

        {movies.map((movie, index) => {
          return (
            <li key={index} className="list-group-item p-3">
              <p>
                Titolo: {movie.title}
              </p>
              <p>
                Genere: {movie.genre}
              </p>  
            </li>
          )
        })}

      
      </ul>
    </div>
  </>

  )
}





export default App

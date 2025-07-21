import { useState } from 'react'



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
const movie_title = movies_list.map( movies_list => movies_list.title)
const movie_genre = movies_list.map( movies_list => movies_list.genre)
console.log(movie_title, movie_genre);





  return (

  <>
    <div className="container">
      <h1>Search a Movie</h1>
      <ul className='list-group'>

        {movies.map((movie, index) => {
          return (
            <li key={index} className="list-group-item">
              Titolo: {movie.title}  Genere: {movie.genre}
            </li>
          )
        })}

      
      </ul>
    </div>
  </>

  )
}





export default App

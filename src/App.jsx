import { useEffect, useState } from 'react'
import Select from 'react-select'



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
const [selectedOption, setSelectedOption] = useState('');
const title = movies_list.map( movies => movies.title)
const genre = movies_list.map( movies => movies.genre) 
console.log(title);
console.log(genre);





const options = {
  value: {genre}, 
  label: {genre},
}

const handleChange = (selectedOption) => {
  if (selectedOption) {
    setSelectedOption(selectedOption);
  } else {
    setSelectedOption(null)
  }
}


  return (

  <>
    <div className="container">
      <h1>Search a Movie</h1>
      <div className="card p-3">
        <div className="d-flex align-items-center m-2">
          <select 
          options={options}
          value={selectedOption}
          onChange={handleChange}
          />
            <p>Genere Selezionato: {selectedOption ? selectedOption.value: "Nessun Genere Selezionato"}</p>
          
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
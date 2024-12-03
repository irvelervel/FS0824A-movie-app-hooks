import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const MovieCard = (props) => {
  // questo componente riceve all'avvio il titolo di un film e lo utilizzerà per chiamare le API di OMDb e recuperare i dettagli del film in questione
  // una volta recuperati, li salverà nel proprio state per poter riempire la card sottostante con queste informazioni
  const [movie, setMovie] = useState(null)

  // MovieCard riceve il titolo del film attualmente selezionato nella tendina
  // di MovieDropDown grazie alla prop intitolata "movieTitle" che riceve dal componente App (this.props.movieTitle)

  const getMovieData = () => {
    fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=' + props.movieTitle)
      .then((response) => {
        if (response.ok) {
          // proseguo con l'estrazione del JSON
          return response.json()
        } else {
          throw new Error('OMDb ha risposto picche')
        }
      })
      .then((searchResults) => {
        console.log('searchResults', searchResults.Search[0])
        // qui ci andrà un this.setState()
        setMovie(searchResults.Search[0])
      })
      .catch((error) => {
        console.log('errore', error)
      })
  }

  useEffect(() => {
    getMovieData()
    // viene eseguito all'avvio (come tutti gli useEffect)
    // ma lo voglio anche ri-eseguire ogni volta che la prop "movieTitle" cambia
    // (cioè quando viene selezionato un nuovo film dalla tendina)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movieTitle])

  // render viene ri-eseguito ad ogni cambio di props o di state
  console.log('SONO IN RENDER!')
  return (
    <div>
      {movie && (
        <Card>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              {movie.Year} - {movie.imdbID}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default MovieCard

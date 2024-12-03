import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieNavbar from './components/MovieNavbar'
import { useState } from 'react'
import MovieDropDown from './components/MovieDropDown'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from './components/MovieCard'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('Inception')

  const changeMovieTitle = (newMovie) => {
    setMovieTitle(newMovie)
  }

  return (
    <div className="App">
      <header>
        <MovieNavbar />
        <Container>
          <Row className="justify-content-center my-3">
            <Col xs={12} md={4}>
              <MovieDropDown
                // passo il VALORE dello stato
                movieTitle={movieTitle}
                // passo anche il MODO DI CAMBIARE lo stato
                changeMovieTitle={changeMovieTitle}
              />
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container>
          <Row className="justify-content-center my-3">
            <Col xs={12} md={4}>
              <MovieCard movieTitle={movieTitle} />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App

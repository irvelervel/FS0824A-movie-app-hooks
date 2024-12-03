import { Form } from 'react-bootstrap'

const MovieDropDown = (props) => {
  return (
    <Form.Select
      // setto il valore in "lettura"
      value={props.movieTitle}
      // al cambio della tendina, imposto lo state in App
      onChange={(e) => {
        props.changeMovieTitle(e.target.value)
      }}
      aria-label="Default select example"
    >
      <option>Inception</option>
      <option>Batman Begins</option>
      <option>Interstellar</option>
      <option>Oppenheimer</option>
      <option>Tenet</option>
    </Form.Select>
  )
}

export default MovieDropDown

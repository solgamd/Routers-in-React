import React from 'react'; 
import FilmCard from './FilmCard';

class ViewFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }))
  }
  render() {
    return (
      <>
      <h1>Studio Ghibli Films</h1>
      <div className="row m-2">
        {this.state.films.map((film, i) => {
          return (
            <FilmCard key={i} title={film.title} description={film.description} />
          );
        })}
      </div>
      </>
    )
  }
}

export default ViewFilms;
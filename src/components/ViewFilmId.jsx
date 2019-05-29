import React, { Component } from 'react';
import FilmCard from './FilmCard';

class ViewFilmId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],

    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/:id")
      .then(res => res.json())
      .then(films => this.setState({ films: films }))
  }

  render() {
    return (
      <>
        <h1>Studio Ghibli Character</h1>
        <div className="row m-2 d-flex">
          {this.state.films.map((film, i) => {
            return (
              <FilmCard key={i} title={film.title} description={film.description} />
            );
          })}
        </div>
      </>
    );
  }
}

export default ViewFilmId;